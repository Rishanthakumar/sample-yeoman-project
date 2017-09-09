import { Injectable } from '@angular/core';
import toastr from 'toastr';

/**
 * This is the class representing an AppNotification.
 */
@Injectable()
export class AppNotification {

  /**
   * Create an AppNotification.
   */
  constructor() {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      onclick: null,
      showDuration: 300,
      hideDuration: 1000,
      timeOut: 5000,
      extendedTimeOut: 1000,
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut'
    };
  }

  /**
   * Handle the warning notifications.
   *
   * @param message The notification message.
   * @param title The notification title.
   * @param overrides The override options.
   */
  public warning(message: string, title?: string, overrides?: ToastrOptions): void {
    toastr.warning(message, title, overrides);
  }

  /**
   * Handle the error notifications.
   *
   * @param message The notification message.
   * @param title The notification title.
   * @param overrides The override options.
   */
  public error(message: string, title?: string, overrides?: ToastrOptions): void {
    toastr.error(message, title, overrides);
  }

  /**
   * Handle the info notifications.
   *
   * @param message The notification message.
   * @param title The notification title.
   * @param overrides The override options.
   */
  public info(message: string, title?: string, overrides?: ToastrOptions): void {
    toastr.info(message, title, overrides);
  }

  /**
   * Handle the success notifications.
   *
   * @param message The notification message.
   * @param title The notification title.
   * @param overrides The override options.
   */
  public success(message: string, title?: string, overrides?: ToastrOptions): void {
    toastr.success(message, title, overrides);
  }

  /**
   * Clear the notifications.
   */
  public clear(): void {
    toastr.clear();
  }
}
