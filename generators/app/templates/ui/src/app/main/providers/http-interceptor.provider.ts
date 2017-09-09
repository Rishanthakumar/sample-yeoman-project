import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, RequestOptionsArgs, Response, Request } from '@angular/http';
import { Observable } from 'rxjs';

import { AppNotification } from '../../core/providers';

/**
 * This is the class representing an AppHttpInterceptor.
 *
 * @extends Http.
 */
@Injectable()
export class AppHttpInterceptor extends Http {

  /**
   * Get the instance.
   *
   * @param backend The backend.
   * @param options The options.
   * @param notification The application notifications.
   */
  public static GetInstance(backend: XHRBackend, options: RequestOptions, notification: AppNotification) {
    return new AppHttpInterceptor(backend, options, notification);
  }
  private notification: AppNotification;

  /**
   * Create an AppHttpInterceptor.
   *
   * @param backend The backend.
   * @param defaultOptions The default options.
   * @param notification The application notifications.
   */
  constructor(backend: XHRBackend, defaultOptions: RequestOptions, notification: AppNotification) {
    super(backend, defaultOptions);
    this.notification = notification;
  }

  /**
   * Handle the request.
   *
   * @param url The request url.
   * @param options The request options.
   */
  public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.handleError(super.request(url, options));
  }

  /**
   * Handle the application error.
   *
   * @param response The error response.
   */
  private handleError(response: Observable<Response>): Observable<Response> {
    return response.catch((error: any) => {
      if (error instanceof Response) {
        if (error.status >= 400) {
          const message = `${error.status} - ${error.statusText || ''}`;
          this.notification.error(message);
        }
      }

      return Observable.throw(error);
    });
  }
}
