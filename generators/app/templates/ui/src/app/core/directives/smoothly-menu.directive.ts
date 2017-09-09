import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import $ from 'jquery';

@Directive({
  selector: '[appSmoothlyMenu]'
})

/**
 * This is the class representing a SmoothlyMenuDirective.
 */
export class SmoothlyMenuDirective {
  @Input('appSmoothlyMenu')
  public menuSelector: string;

  private readonly MINI_NAV_BAR_CLASS: string = 'mini-navbar';
  private readonly FIXED_SLIDER: string = 'fixed-sidebar';
  private readonly STYLE_ATTRIBUTE: string = 'style';
  private readonly BODY_TAG: string = 'body';

  private element: ElementRef;

  /**
   * Create a SmoothlyMenuDirective.
   *
   * @param el The element reference.
   */
  constructor(el: ElementRef) {
    this.element = el;
  }

  /**
   * Manage on click event.
   */
  @HostListener('click')
  public onClick(): void {
    const body = $(this.BODY_TAG);
    const sidebarMenu = $(this.menuSelector);

    body.toggleClass(this.MINI_NAV_BAR_CLASS);
    if (!body.hasClass(this.MINI_NAV_BAR_CLASS)) {
      sidebarMenu.hide();
      setTimeout(() => sidebarMenu.fadeIn(400), 200);
    } else if (body.hasClass(this.FIXED_SLIDER)) {
      sidebarMenu.hide();
      setTimeout(() => sidebarMenu.fadeIn(400), 100);
    } else {
      sidebarMenu.removeAttr(this.STYLE_ATTRIBUTE);
    }
  }
}
