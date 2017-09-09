import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';
import $ from 'jquery';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appScrollApplyClass]'
})

/**
 * This is the class representing an AppMenuComponent.
 * @implements OnInit.
 * @implements OnDestroy.
 */
export class ScrollApplyClassDirective implements OnInit, OnDestroy {
  @Input('appScrollApplyClass')
  public scrollClass: string;

  private elementReference: JQuery;
  private scrollEventSubscription: Subscription;

  /**
   * Create an ScrollApplyClassDirective.
   *
   * @param el The element reference.
   */
  constructor(el: ElementRef) {
    this.elementReference = $(el.nativeElement);
  }

  /**
   * Handle the logic at initialization.
   */
  public ngOnInit(): void {
    this.scrollEventSubscription = Observable.fromEvent(window, 'scroll').subscribe(() => {
      if ($(document).scrollTop() > 0) {
        this.elementReference.addClass(this.scrollClass);
      } else {
        this.elementReference.removeClass(this.scrollClass);
      }
    });
  }

  /**
   * Handle the logic on destroy.
   */
  public ngOnDestroy(): void {
    this.scrollEventSubscription.unsubscribe();
  }
}
