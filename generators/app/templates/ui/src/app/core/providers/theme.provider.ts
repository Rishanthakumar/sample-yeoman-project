import { Injectable } from '@angular/core';
import { Theme, Settings } from '../models';
import { AppConfiguration } from './configuration.provider';

/**
 * This is the class representing an AppTheme.
 */
@Injectable()
export class AppTheme {
  private bodyElementReference: JQuery;
  private readonly THEME_BLUE = 'theme-blue';
  private readonly THEME_GREEN = 'theme-green';
  private readonly THEME_DEFAULT = 'theme-default';
  private currentTheme: Theme;
  private configuration: AppConfiguration;
  private settings: Settings;

  /**
   * Create an AppTheme.
   *
   * @param configuration The application configurations.
   */
  constructor(configuration: AppConfiguration) {
    this.configuration = configuration;
    this.settings =  this.configuration.getConfiguration();

    this.bodyElementReference = $('body');

    this.changeTheme(this.settings.appTheme, false);
  }

  /**
   * Change the theme.
   *
   * @param theme The theme.
   * @param ignoreSaveState The ignore state.
   */
  public changeTheme(theme: Theme, ignoreSaveState?: boolean): void {
    if (theme && this.currentTheme === theme) {
      return;
    }

    this.settings.appTheme = theme;
    this.configuration.onAppThemeChange(ignoreSaveState);

    this.currentTheme = theme;
    this.bodyElementReference.removeClass(this.THEME_DEFAULT);
    this.bodyElementReference.removeClass(this.THEME_BLUE);
    this.bodyElementReference.removeClass(this.THEME_GREEN);

    switch (theme) {
      case Theme.blue:
        this.bodyElementReference.addClass(this.THEME_BLUE);
        break;
      case Theme.green:
        this.bodyElementReference.addClass(this.THEME_GREEN);
        break;
      case Theme.main:
      default:
        this.bodyElementReference.addClass(this.THEME_DEFAULT);
        break;
    }
  }
}
