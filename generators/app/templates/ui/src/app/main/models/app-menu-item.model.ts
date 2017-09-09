import { MenuItem } from '../../core/models';

/**
 * Interface for classes that represent an AppMenuItem.
 *
 * @interface AppMenuItem.
 * @extends MenuItem.
 */
export interface AppMenuItem extends MenuItem {
  title: string;
  iconClass?: string;
  children?: AppMenuItem[];
}
