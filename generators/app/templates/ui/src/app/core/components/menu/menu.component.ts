import { Component, ContentChild, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem, MappedMenuItem } from '../../models';
import _ from 'lodash';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

/**
 * This is the class representing an AppMenuComponent.
 */
export class AppMenuComponent {
  public mappedMenuItems: MappedMenuItem[];

  @ContentChild('parentTemplate')
  public parentTemplate: any;

  @ContentChild('childTemplate')
  public childTemplate: any;

  @ContentChild('arrowTemplate')
  public arrowTemplate: any;

  @Input()
  public logoUrl: string;

  @Input()
  public appName: string;

  /**
   * Set the menu items.
   *
   * @param items The list of menu items.
   */
  @Input()
  public set menuItems(items: MenuItem[]) {
    this.mappedMenuItems = this.mapMenuItems(items);
  };

  @Output()
  public menuItemClick = new EventEmitter<any>();

  /**
   * Handle the menu item click event.
   *
   * @param item The mapped menu item.
   * @param parents The list of mapped menu items.
   */
  public onMenuItemClick(item: MappedMenuItem, parents?: MappedMenuItem[]): void {
    if (item.active) {
      item.expanded = !item.expanded;
      return;
    }

    // Toggle state and return if any immediate child is active
    if (this.hasChildren(item)) {
      for (let childItem of item.children) {
        if (childItem.active) {
          item.active = true;
          item.expanded = true;
          return;
        }
      }
    }

    this.resetState(this.mappedMenuItems);

    // Set parent state active
    if (parents) {
      for (let parent of parents) {
        parent.active = true;
        parent.expanded = true;
      }
    }

    this.activateFirstLeaf(item);
    this.menuItemClick.emit(item);
  }

  /**
   * Check menu item contain children.
   *
   * @param menuItem The mapped menu item.
   * @returns {boolean}.
   */
  public hasChildren(menuItem: MappedMenuItem): boolean {
    return menuItem.children && menuItem.children.length > 0;
  }

  /**
   * Map the menu items.
   *
   * @param items The list of menu items.
   * @returns The list of mapped menu items.
   */
  private mapMenuItems(items: MenuItem[]): MappedMenuItem[] {
    return _.map<MenuItem, MappedMenuItem>(items, (item: MenuItem) => {
      let _mappedMenuItem: MappedMenuItem = item as MappedMenuItem;
      _mappedMenuItem.expanded = item.active;

      if (item.children) {
        _mappedMenuItem.children = this.mapMenuItems(item.children);
      }

      return _mappedMenuItem;
    });
  }

  /**
   * Activate the first sub menu item.
   *
   * @param item The mapped menu item.
   */
  private activateFirstLeaf(item: MappedMenuItem): void {
    item.active = true;
    item.expanded = true;
    if (this.hasChildren(item)) {
      this.activateFirstLeaf(item.children[0]);
    }
  }

  /**
   * Reset the state.
   *
   * @param menuItems The list of mapped menu items.
   */
  private resetState(menuItems: MappedMenuItem[]): void {
    for (let menuItem of menuItems) {
      menuItem.active = false;
      menuItem.expanded = false;

      if (this.hasChildren(menuItem)) {
        this.resetState(menuItem.children);
      }
    }
  }
}
