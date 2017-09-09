import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {Http, HttpModule, RequestOptions, XHRBackend} from "@angular/http";

import {AppCoreModule} from "../core";
import {AppNotification} from "../core/providers";
import {
  AppApplicationDataProvider,
  AppHttpInterceptor,
  AppMenuDataProvider,
  AppNotificationDataProvider
} from "./providers";

import {AppBaseComponent, AppMainComponent, BuilderComponent, SignupComponent, TanJayComponent} from "./components";

import {appRoutes} from "./main.routes";

@NgModule({
  declarations: [
    AppBaseComponent,
    AppMainComponent,
    TanJayComponent,
    BuilderComponent,
    SignupComponent
  ],
  exports: [
    AppBaseComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AppCoreModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: Http,
      useFactory: AppHttpInterceptor.GetInstance,
      deps: [XHRBackend, RequestOptions, AppNotification]
    },
    AppApplicationDataProvider,
    AppMenuDataProvider,
    AppNotificationDataProvider
  ]
})

/**
 * This is the class representing an AppMainModule.
 */
export class AppMainModule {
}
