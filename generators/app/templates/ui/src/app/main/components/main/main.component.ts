import { Component } from '@angular/core';
import { NotificationCollection, DashboardApplication } from '../../../core/models';
import { AppMenuItem } from '../../models';
import { AppNotificationDataProvider, AppApplicationDataProvider, AppMenuDataProvider } from '../../providers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

/**
 * This is the class representing an AppMainComponent.
 */
export class AppMainComponent {
  public menuItems: AppMenuItem[];
  public notifications: NotificationCollection;
  public dashboardApplications: DashboardApplication[];

  private notificationDataProvider: AppNotificationDataProvider;
  private applicationDataProvider: AppApplicationDataProvider;
  private menuDataProvider: AppMenuDataProvider;

  /**
   * Create an AppMainComponent.
   *
   * @param notificationDataProvider The notification data.
   * @param applicationDataProvider The application data.
   * @param menuDataProvider The menu data.
   */
  constructor(notificationDataProvider: AppNotificationDataProvider, applicationDataProvider: AppApplicationDataProvider,
              menuDataProvider: AppMenuDataProvider) {
    this.notificationDataProvider = notificationDataProvider;
    this.applicationDataProvider = applicationDataProvider;
    this.menuDataProvider = menuDataProvider;

    this.menuItems = this.menuDataProvider.getMenuItems();
    this.notifications = this.notificationDataProvider.getNotifications();
    this.dashboardApplications = this.applicationDataProvider.getApplications();
  }

  /**
   * Handle the search query change event.
   *
   * @param query The query.
   */
  public onSearchQueryChange(query: string): void {
    console.log(query);
  }

  /**
   * Handle the search query enter event.
   *
   * @param query The query.
   */
  public searchQueryEnter(query: string): void {
    console.log(query);
  }

  /**
   * Handle the menu item click event.
   *
   * @param item The application menu item.
   */
  public onMenuItemClick(item: AppMenuItem): void {
    console.log(item);
  }

  /**
   * Handle the show all click.
   */
  public onShowAllClick(): void {
    console.log('Show more notifications clicked');
  }

  public onViewApplication(application: DashboardApplication): void {
    console.log(application);
  }

  public onShowNotification(notification: NotificationCollection): void {
    console.log(notification);
  }
}
