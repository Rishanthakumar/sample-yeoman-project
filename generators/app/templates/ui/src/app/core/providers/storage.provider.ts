import { Injectable } from '@angular/core';

/**
 * This is the class representing an AppStorageProvider.
 */
@Injectable()
export class AppStorageProvider {

  /**
   * Set the value.
   *
   * @param key The item key.
   * @param value The item value.
   */
  public setValue<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Get the value.
   *
   * @param key The item key.
   */
  public getValue<T>(key: string): T {
    return <T> JSON.parse(localStorage.getItem(key));
  }
}
