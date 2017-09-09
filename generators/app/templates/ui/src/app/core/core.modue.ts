import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  SlimScrollDirective,
  SmoothlyMenuDirective,
  ScrollApplyClassDirective,
  StopPropagationDirective
} from './directives';

import {
  AppState,
  AppNotification,
  AppConfiguration,
  AppTheme,
  AppStorageProvider
} from './providers';

import { TimeDurationPipe } from './pipes';

import {
  AppAccountSummaryComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppMenuComponent,
  AppPageNotFoundComponent,
  AppInternalServerErrorComponent,
  AppOnOffSwitchComponent,
  AppConfigurationComponent,
  AppNotificationComponent,
  AppApplicationMenuComponent
} from './components';

@NgModule({
  declarations: [
    // Directives
    SmoothlyMenuDirective,
    SlimScrollDirective,
    ScrollApplyClassDirective,
    StopPropagationDirective,

    // Pipes
    TimeDurationPipe,

    // Components
    AppOnOffSwitchComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppMenuComponent,
    AppPageNotFoundComponent,
    AppInternalServerErrorComponent,
    AppConfigurationComponent,
    AppNotificationComponent,
    AppApplicationMenuComponent,
    AppAccountSummaryComponent
  ],
  exports: [
    // Directives
    SlimScrollDirective,

    // Components
    AppOnOffSwitchComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppMenuComponent,
    AppPageNotFoundComponent,
    AppInternalServerErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AppState,
    AppNotification,
    AppConfiguration,
    AppTheme,
    AppStorageProvider
  ]
})

/**
 * This is the class representing an AppCoreModule.
 */
export class AppCoreModule {
}
