import { Component, EventEmitter, Output, Input } from '@angular/core';
import { AppConfiguration, AppTheme } from '../../providers';
import { NotificationCollection, DashboardApplication, Settings } from '../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

/**
 * Class representing an AppHeaderComponent.
 */
export class AppHeaderComponent {
  @Output()
  public searchQueryChange = new EventEmitter<string>();

  @Output()
  public searchQueryEnter = new EventEmitter<string>();

  @Output()
  public logoutClick = new EventEmitter();

  @Output()
  public showAllNotifications = new EventEmitter();

  @Output()
  public viewApplication = new EventEmitter<DashboardApplication>();

  @Output()
  public showNotification = new EventEmitter<NotificationCollection>();

  @Input()
  public notifications: NotificationCollection;

  @Input()
  public notificationLimit: number;

  @Input()
  public dashboardApplications: DashboardApplication[];

  @Input()
  public applicationLimit: number;

  /**
   * Set the state of search bar.
   *
   * @param value The state of search bar.
   */
  @Input()
  public set showSearchBar(value: boolean) {
    this.settings.showSearchBar = value;
  }

  /**
   * Set the state of settings panel.
   *
   * @param value The state of settings panel.
   */
  @Input()
  public set showSettingsPanel(value: boolean) {
    this.settings.showSettingsPanel = value;
  }

  /**
   * Set the state of notification widget.
   *
   * @param value The state of notification widget.
   */
  @Input()
  public set showNotificationWidget(value: boolean) {
    this.settings.showNotificationWidget = value;
  }

  /**
   * Set the state of application menu.
   *
   * @param value The state of application menu.
   */
  @Input()
  public set showApplicationMenu(value: boolean) {
    this.settings.showApplicationMenu = value;
  }

  /**
   * Set the state of sidebar menu toggle button.
   *
   * @param value The state of sidebar menu toggle button.
   */
  @Input()
  public set showSidebarMenuToggleButton(value: boolean) {
    this.settings.showSidebarMenuToggleButton = value;
  }

  /**
   * Set the configuration settings.
   *
   * @param value The configuration settings.
   */
  @Input()
  public set configuration(value: Settings) {
    this.settings.showSearchBar = value.showSearchBar;
    this.settings.showSettingsPanel = value.showSettingsPanel;
    this.settings.showNotificationWidget = value.showNotificationWidget;
    this.settings.showApplicationMenu = value.showApplicationMenu;
    this.settings.showSidebarMenuToggleButton = value.showSidebarMenuToggleButton;
  }

  public openSettingsPanel: boolean;
  public settings: Settings;
  public searchQuery: string;

  private ENTER_KEY_CODE = 13;

  /**
   * Create an AppHeaderComponent.
   *
   * @param configuration The application configurations.
   * @param theme The application theme.
   */
  constructor(configuration: AppConfiguration, theme: AppTheme) {
    this.settings = configuration.getConfiguration();
    this.openSettingsPanel = false;
  }

  /**
   * Handle the search query key press event.
   *
   * @param keyCode The key code.
   */
  public onSearchQueryKeyPress(keyCode: number) {
    if (keyCode === this.ENTER_KEY_CODE) {
      this.searchQueryEnter.emit(this.searchQuery);
    }

    this.searchQueryChange.emit(this.searchQuery);
  }

  /**
   * Handle the settings button click event.
   */
  public onSettingsClick(): void {
    this.openSettingsPanel = !this.openSettingsPanel;
  }

  /**
   * Handle the logout button click event.
   */
  public onLogoutClick(): void {
    this.logoutClick.emit();
  }

  /**
   * Handle the show all button click event.
   */
  public onShowAllClick(): void {
    this.showAllNotifications.emit();
  }

  public onViewApplication(application: DashboardApplication): void {
    this.viewApplication.emit(application);
  }

  public onShowNotification(notification: NotificationCollection): void {
    this.showNotification.emit(notification);
  }
}
