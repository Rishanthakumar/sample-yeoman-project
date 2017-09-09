import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotificationCollection } from '../../models';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})

/**
 * This is the class representing an AppNotificationComponent.
 */
export class AppNotificationComponent {
  @Input()
  public notifications: NotificationCollection;

  @Input()
  public limit: number = 5;

  @Output()
  public showAllNotifications = new EventEmitter<void>();

  @Output()
  public showNotification = new EventEmitter<NotificationCollection>();

  /**
   * Raise the show all notifications.
   */
  public onShowAllClick(): void {
    this.showAllNotifications.emit();
  }

  /**
   * Raise the show notification.
   *
   * @param notification The notification.
   */
  public onShowNotification(notification: NotificationCollection): void {
    this.showNotification.emit(notification);
  }
}
