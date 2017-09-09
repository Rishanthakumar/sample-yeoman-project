import { Injectable } from '@angular/core';
import { Settings, Theme } from '../models';
import { AppStorageProvider } from './storage.provider';

/**
 * This is the class representing an AppConfiguration.
 */
@Injectable()
export class AppConfiguration {
  private settings: Settings;
  private storage: AppStorageProvider;
  private bodyElementReference: JQuery;
  private readonly HIDE_MINI_SIDE_MENU_CLASS = 'hide-mini-side-menu';
  private readonly FIXED_SIDE_MENU_CLASS = 'fixed-side-menu';
  private readonly STICKY_FOOTER_CLASS = 'sticky-footer';
  private readonly FIXED_HEADER_CLASS = 'fixed-navbar';

  /**
   * Create an AppConfiguration.
   *
   * @param storage The application storage.
   */
  constructor(storage: AppStorageProvider) {
    this.storage = storage;

    this.bodyElementReference = $('body');
    this.settings = {
      appTheme: Theme.main,
      showSearchBar: true,
      showSettingsPanel: true,
      showNotificationWidget: true,
      showApplicationMenu: true,
      showSidebarMenuToggleButton: true,
      hideMiniSideMenu: true,
      fixedSideMenu: false,
      stickyFooter: false,
      enableNotifications: true,
      enableAppMenu: true,
      fixedHeader: true,
    };

    this.setInitialState();
    this.onHideMiniSideMenuStateChange(true);
    this.onFixedSidebarStateChange(true);
    this.onStickyFooterStateChange(true);
    this.onFixedHeaderStateChange(false);
  }

  /**
   * Get the configuration settings.
   */
  public getConfiguration(): Settings {
    return this.settings;
  }

  /**
   * Handle the mini side menu state.
   *
   * @param ignoreSaveState The ignore state.
   */
  public onHideMiniSideMenuStateChange(ignoreSaveState?: boolean) {
    if (!ignoreSaveState) {
      this.storage.setValue<boolean>('hideMiniSideMenu', this.settings.hideMiniSideMenu);
    }

    if (this.settings.hideMiniSideMenu) {
      this.bodyElementReference.addClass(this.HIDE_MINI_SIDE_MENU_CLASS);
    } else {
      this.bodyElementReference.removeClass(this.HIDE_MINI_SIDE_MENU_CLASS);
    }
  }

  /**
   * Handle the fixed sidebar state.
   *
   * @param ignoreSaveState The ignore state.
   */
  public onFixedSidebarStateChange(ignoreSaveState?: boolean) {
    if (!ignoreSaveState) {
      this.storage.setValue<boolean>('fixedSideMenu', this.settings.fixedSideMenu);
    }

    if (this.settings.fixedSideMenu) {
      this.bodyElementReference.addClass(this.FIXED_SIDE_MENU_CLASS);
    } else {
      this.bodyElementReference.removeClass(this.FIXED_SIDE_MENU_CLASS);
    }
  }

  /**
   * Handle the sticky footer state.
   *
   * @param ignoreSaveState The ignore state.
   */
  public onStickyFooterStateChange(ignoreSaveState?: boolean) {
    if (!ignoreSaveState) {
      this.storage.setValue<boolean>('stickyFooter', this.settings.stickyFooter);
    }

    if (this.settings.stickyFooter) {
      this.bodyElementReference.addClass(this.STICKY_FOOTER_CLASS);
    } else {
      this.bodyElementReference.removeClass(this.STICKY_FOOTER_CLASS);
    }
  }

  /**
   * Handle the notifications state.
   *
   * @param ignoreSaveState The ignore state.
   */
  public onEnableNotificationStateChange(ignoreSaveState?: boolean) {
    if (!ignoreSaveState) {
      this.storage.setValue<boolean>('enableNotifications', this.settings.enableNotifications);
    }
  }

  /**
   * Handle the app menu state.
   *
   * @param ignoreSaveState The ignore state.
   */
  public onEnableAppMenuChange(ignoreSaveState?: boolean) {
    if (!ignoreSaveState) {
      this.storage.setValue<boolean>('enableAppMenu', this.settings.enableAppMenu);
    }
  }

  /**
   * Handle the fixed header state.
   *
   * @param ignoreSaveState The ignore state.
   */
  public onFixedHeaderStateChange(ignoreSaveState?: boolean) {
    if (!ignoreSaveState) {
      this.storage.setValue<boolean>('fixedHeader', this.settings.fixedHeader);
    }

    if (this.settings.fixedHeader) {
      this.bodyElementReference.addClass(this.FIXED_HEADER_CLASS);
    } else {
      this.bodyElementReference.removeClass(this.FIXED_HEADER_CLASS);
    }
  }

  /**
   * Handle the app theme state.
   *
   * @param ignoreSaveState The ignore state.
   */
  public onAppThemeChange(ignoreSaveState?: boolean) {
    if (!ignoreSaveState) {
      this.storage.setValue<Theme>('appTheme', this.settings.appTheme);
    }
  }

  /**
   * Set the initial state.
   */
  private setInitialState(): void {
    let appTheme = this.storage.getValue<Theme>('appTheme');
    if (appTheme !== null) {
      this.settings.appTheme = appTheme;
    }

    let hideMiniSideMenu = this.storage.getValue<boolean>('hideMiniSideMenu');
    if (hideMiniSideMenu !== null) {
      this.settings.hideMiniSideMenu = hideMiniSideMenu;
    }

    let fixedSideMenu = this.storage.getValue<boolean>('fixedSideMenu');
    if (fixedSideMenu !== null) {
      this.settings.fixedSideMenu = fixedSideMenu;
    }

    let stickyFooter = this.storage.getValue<boolean>('stickyFooter');
    if (stickyFooter !== null) {
      this.settings.stickyFooter = stickyFooter;
    }

    let enableNotifications = this.storage.getValue<boolean>('enableNotifications');
    if (enableNotifications !== null) {
      this.settings.enableNotifications = enableNotifications;
    }

    let enableAppMenu = this.storage.getValue<boolean>('enableAppMenu');
    if (enableAppMenu !== null) {
      this.settings.enableAppMenu = enableAppMenu;
    }

    let fixedHeader = this.storage.getValue<boolean>('fixedHeader');
    if (fixedHeader !== null) {
      this.settings.fixedHeader = fixedHeader;
    }
  }
}
