import { Component } from '@angular/core';
import { AppConfiguration, AppTheme } from '../../providers';
import { Settings, Theme } from '../../models';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})

/**
 * Class representing an AppConfigurationComponent.
 */
export class AppConfigurationComponent {
  public configuration: AppConfiguration;
  public settings: Settings;
  public theme: AppTheme;

  /**
   * Create an AppConfigurationComponent.
   *
   * @param configuration The application configurations.
   * @param theme The application theme.
   */
  constructor(configuration: AppConfiguration, theme: AppTheme) {
    this.configuration = configuration;
    this.theme = theme;

    this.settings = configuration.getConfiguration();
  }

  /**
   * Applies the default theme.
   */
  public applyDefaultTheme(): void {
    this.theme.changeTheme(Theme.main);
  }

  /**
   * Applies the blue theme.
   */
  public applyBlueTheme(): void {
    this.theme.changeTheme(Theme.blue);
  }

  /**
   * Applies the green theme.
   */
  public applyGreenTheme(): void {
    this.theme.changeTheme(Theme.green);
  }
}
