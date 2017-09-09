import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStopPropagation]'
})

/**
 * This is the class representing a StopPropagationDirective.
 */
export class StopPropagationDirective {

  /**
   * Handle the on click event.
   *
   * @param e The element
   */
  @HostListener('click', ['$event'])
  public onClick(e: any): void {
    e.preventDefault();
    e.stopPropagation();
  }
}
