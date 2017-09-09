import {BrowserModule} from "@angular/platform-browser";
import {ApplicationRef, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {createInputTransfer, createNewHosts, removeNgStyles} from "@angularclass/hmr";

import "bootstrap";
import "jquery-slimscroll";

import "../styles/styles.scss";
/**
 * Start pace loading progress
 */
import * as Pace from "pace-js";
/**
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from "./environment";

import {AppCoreModule} from "./core";
import {AppMainModule} from "./main";

import {AppState, InternalStateType} from "./core/providers";
import {AppComponent} from "./app.component";
Pace.start();

// import { TanJayComponent } from './main/components/main/tanjay.component';

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppCoreModule,
    AppMainModule
  ],
  providers: [
    ENV_PROVIDERS
  ],
  bootstrap: [ AppComponent ]
})

/**
 * This is the class representing an AppModule.
 */
export class AppModule {

  /**
   * Create an AppModule.
   *
   * @param appRef The application reference.
   * @param appState The application state.
   */
  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  /**
   * On initialize.
   *
   * @param store The store type.
   */
  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  /**
   * On destroy.
   *
   * @param store The store type.
   */
  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    store.state = this.appState._state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  /**
   * On after destroy.
   *
   * @param store The store type.
   */
  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
