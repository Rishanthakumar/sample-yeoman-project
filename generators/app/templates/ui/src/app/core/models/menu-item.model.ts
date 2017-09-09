/**
 * Interface for classes that represent a MenuItem.
 *
 * @interface MenuItem.
 */
export interface MenuItem {
  active: boolean;
  children?: MenuItem[];
}
