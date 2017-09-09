import {Injectable} from "@angular/core";
import {AppMenuItem} from "../models";

/**
 * This is the class representing an AppMenuDataProvider.
 */
@Injectable()
export class AppMenuDataProvider {
  /**
   * Get the menu items.
   *
   * @returns The list of menu items.
   */
  public getMenuItems(): AppMenuItem[] {
    return [
      {
        title: 'Dashboard',
        iconClass: 'fa fa-tachometer',
        active: true
      },
      {
        title: "Users",
        iconClass: 'fa fa-flag',
        active: false,
        children: [
          {
            title: 'Add User',
            iconClass: 'fa fa-flag',
            active: false
          }
        ]
      }
    ];
  }
}
