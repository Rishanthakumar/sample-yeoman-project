import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DashboardApplication } from '../../models/application.model';

@Component({
  selector: 'app-application-menu',
  templateUrl: './application-menu.component.html',
  styleUrls: ['./application-menu.component.scss'],
})

/**
 * Class representing an AppApplicationMenuComponent.
 */
export class AppApplicationMenuComponent {
  public limit: number = 3;
  public applications: DashboardApplication[] = [];
  public showMoreButton: boolean = false;

  @Output()
  public viewApplication = new EventEmitter<DashboardApplication>();

  /**
   * Set the value of dashboard applications.
   *
   * @param value The dashboard application list.
   */
  @Input()
  public set dashboardApplications(value: DashboardApplication[]) {
    this.applications = value;
  }

  /**
   * Set the application limit.
   *
   * @param value The application limit.
   */
  @Input()
  public set applicationLimit(value: number) {
    this.limit = value;
  }

  /**
   * Handle the state of the show more button.
   *
   * @returns The state of show more button.
   */
  public enableShowMoreButton(): boolean {
    return this.showMoreButton = this.applications.length > this.limit;
  }

  /**
   * Handle the more button click event.
   */
  public onMoreClick(): void {
    this.limit += this.limit;
  }

  /**
   * Handle the view event.
   *
   * @param application The application.
   */
  public onViewApplication(application: DashboardApplication): void {
    this.viewApplication.emit(application);
  }
}
