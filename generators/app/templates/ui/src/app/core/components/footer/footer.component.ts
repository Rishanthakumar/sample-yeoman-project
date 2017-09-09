import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

/**
 * Class representing an AppFooterComponent.
 */
export class AppFooterComponent {
  @Input()
  public appName: string;

  public currentYear: number;

  /**
   * Create an AppFooterComponent.
   */
  constructor() {
    this.setCurrentYear();
  }

  /**
   * Set current year.
   */
  public setCurrentYear(): void {
    this.currentYear = new Date().getFullYear();
  }
}
