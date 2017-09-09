import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeDuration'
})

/**
 * This is the class representing a TimeDurationPipe.
 *
 * @implements PipeTransform.
 */
export class TimeDurationPipe implements PipeTransform {

  /**
   * Transform the date.
   *
   * @param value The date.
   * @returns The transform date.
   */
  public transform(value: Date): string {
    return moment(value).fromNow();
  }
}
