import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CustomAction } from '../../models';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss']
})

/**
 * Class representing an AppAccountSummaryComponent.
 */
export class AppAccountSummaryComponent {
  @Input()
  public profileImageUrl: string;

  @Input()
  public userName: string;

  @Input()
  public customActions: CustomAction[];

  @Output()
  public onUserAction = new EventEmitter();

  /**
   * This method will send the action to its parent controllers.
   *
   * @param action Action to raise.
   */
  public onCustomActionClick(action: string): void {
    this.onUserAction.emit(action);
  }
}
