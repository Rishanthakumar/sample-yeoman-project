import { Theme } from './theme.model';

/**
 * Interface for classes that represent a Settings.
 *
 * @interface Settings.
 */
export interface Settings {
  appTheme: Theme;
  hideMiniSideMenu: boolean;
  fixedSideMenu: boolean;
  stickyFooter: boolean;
  enableNotifications: boolean;
  enableAppMenu: boolean;
  showSearchBar: boolean;
  showSettingsPanel: boolean;
  showNotificationWidget: boolean;
  showApplicationMenu: boolean;
  showSidebarMenuToggleButton: boolean;
  fixedHeader: boolean;
}
