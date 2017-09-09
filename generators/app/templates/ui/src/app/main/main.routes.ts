import {Routes} from "@angular/router";

import {AppInternalServerErrorComponent, AppPageNotFoundComponent} from "../core/components";

import {AppMainComponent, BuilderComponent, SignupComponent} from "./components";

export const appRoutes: Routes = [
  {
    path: 'records',
    component: BuilderComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'server-error',
    component:  AppInternalServerErrorComponent
  },
  {
    path: '',
    component: AppMainComponent
  },
  {
    path: '**',
    component: AppPageNotFoundComponent
  },
];
