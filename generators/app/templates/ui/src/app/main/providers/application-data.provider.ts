import { Injectable } from '@angular/core';
import { DashboardApplication } from '../../core/models';

/**
 * This is the class representing an AppApplicationDataProvider.
 */
@Injectable()
export class AppApplicationDataProvider {

  /**
   * Get the applications.
   *
   * @returns The list of dashboard applications.
   */
  public getApplications(): DashboardApplication[] {
    return [
      {
        imageUrl: '../assets/img/chat.png',
        name: 'Dakara',
        redirectUrl: 'http://www.google.com'
      },
      {
        imageUrl: '../assets/img/credit-card.png',
        name: 'Valhalla',
        redirectUrl: 'http://www.google.com'
      },
      {
        imageUrl: '../assets/img/diamond.png',
        name: 'Cheyenne',
        redirectUrl: 'http://www.google.com'
      },
      {
        imageUrl: '../assets/img/line-chart.png',
        name: 'Tollan',
        redirectUrl: 'http://www.google.com'
      },
      {
        imageUrl: '../assets/img/presentation.png',
        name: 'Launchpad',
        redirectUrl: 'http://www.google.com'
      },
      {
        imageUrl: '../assets/img/shield.png',
        name: 'Prometheus',
        redirectUrl: 'http://www.google.com'
      }
    ];
  }
}
