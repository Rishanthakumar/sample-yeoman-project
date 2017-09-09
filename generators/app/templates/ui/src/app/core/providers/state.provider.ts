import { Injectable } from '@angular/core';

export type InternalStateType = {
  [key: string]: any
};

/**
 * This is the class representing an AppState.
 */
@Injectable()
export class AppState {

  public _state: InternalStateType = { };

  /**
   * Get the already returned clone of the current state.
   */
  public get state() {
    return this._state = this._clone(this._state);
  }

  /**
   * Set the never allow mutation.
   *
   * @param value The state value.
   */
  public set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  /**
   * Get the state.
   *
   * @param prop The prop value.
   */
  public get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  /**
   * Set the state.
   *
   * @param prop The prop value.
   * @param value The state value.
   */
  public set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  /**
   * Clone the state.
   *
   * @param object The state type.
   */
  private _clone(object: InternalStateType) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }
}
