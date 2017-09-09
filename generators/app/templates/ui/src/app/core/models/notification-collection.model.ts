import { Notification } from './notification.model';

/**
 * Interface for classes that represent a NotificationCollection.
 *
 * @interface NotificationCollection.
 */
export interface NotificationCollection {
  count: number;
  items: Notification[];
}
