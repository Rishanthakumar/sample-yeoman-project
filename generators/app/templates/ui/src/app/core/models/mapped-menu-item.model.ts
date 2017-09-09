import { MenuItem } from './menu-item.model';

/**
 * Interface for classes that represent a MappedMenuItem.
 *
 * @interface MappedMenuItem.
 * @extends MenuItem.
 */
export interface MappedMenuItem extends MenuItem {
  expanded: boolean;
  children?: MappedMenuItem[];
}
