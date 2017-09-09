import { Injectable } from '@angular/core';
import { NotificationCollection } from '../../core/models';

/**
 * This is the class representing an AppNotificationDataProvider.
 */
@Injectable()
export class AppNotificationDataProvider {

  /**
   * Get the notifications.
   *
   * @returns The collection of notifications.
   */
  public getNotifications(): NotificationCollection {
    return {
      count: 5,
      items: [
        {
          title: 'Notification 1',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus, augue sit amet bibendum mattis',
          time: new Date()
        },
        {
          title: 'Notification 2',
          message: 'Suspendisse commodo est eget velit finibus faucibus. Fusce rutrum rutrum rhoncus.',
          time: new Date()
        },
        {
          title: 'Notification 3',
          message: 'Donec commodo ut libero quis elementum. Nullam interdum laoreet bibendum.',
          time: new Date()
        }
      ]
    };
  }
}
