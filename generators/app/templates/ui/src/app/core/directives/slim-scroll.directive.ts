import { Directive, ElementRef, OnChanges, OnDestroy, Input, SimpleChanges } from '@angular/core';
import $ from 'jquery';

@Directive({
  selector: '[appSlimScroll]'
})

/**
 * This is the class representing a SlimScrollDirective.
 *
 * @implements OnChanges.
 * @implements OnDestroy
 */
export class SlimScrollDirective implements OnChanges, OnDestroy {
  @Input()
  public containerHeight: string;

  @Input()
  public opacity: string;

  @Input('appSlimScroll')
  public enabled: boolean;

  private readonly DEFAULT_CONTENT_HEIGHT: string = '100%';
  private readonly DEFAULT_OPACITY: number = 0.9;
  private elementReference: JQuery;

  constructor(el: ElementRef) {
    this.elementReference = $(el.nativeElement);
  }

  /**
   * Handle the changes.
   *
   * @param changes The changes.
   */
  public ngOnChanges(changes: SimpleChanges): void {
    if (this.enabled) {
      this.iniSlimScroll();
    } else {
      this.destroySlimScroll();
    }
  }

  /**
   * Handle the destroy event.
   */
  public ngOnDestroy(): void {
    this.destroySlimScroll();
  }

  /**
   * Handle the scroll event.
   */
  private iniSlimScroll(): void {
    this.elementReference.slimScroll({
      height: this.containerHeight || this.DEFAULT_CONTENT_HEIGHT,
      railOpacity: this.opacity || this.DEFAULT_OPACITY,
    });
  }

  /**
   * Handle the scroll destroy event.
   */
  private destroySlimScroll(): void {
    this.elementReference.slimScroll({
      destroy: true
    });
  }
}
