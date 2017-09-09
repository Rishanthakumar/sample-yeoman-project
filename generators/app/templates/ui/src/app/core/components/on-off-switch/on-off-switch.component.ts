import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const ON_OFF_SWITCH_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AppOnOffSwitchComponent),
  multi: true,
  providers: [NG_VALUE_ACCESSOR]
};

type TouchedCallback = () => void;
type ChangeCallback = (value: any) => void;

const EMPTY_FUNCTION = () => {
  // No implementation
};

@Component({
  selector: 'app-on-off-switch',
  templateUrl: './on-off-switch.component.html',
  styleUrls: ['./on-off-switch.component.scss'],
  providers: [ON_OFF_SWITCH_CONTROL_VALUE_ACCESSOR]
})

/**
 * This is the class representing an AppOnOffSwitchComponent.
 * @implements {ControlValueAccessor}
 */
export class AppOnOffSwitchComponent implements ControlValueAccessor {
  @Input('identifier')
  public identifier: string;

  /**
   * Set the value.
   *
   * @param value The value.
   */
  public set value(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
    }
  }

  /**
   * Get the value.
   *
   * @return The value.
   */
  public get value(): any {
    return this.innerValue;
  }

  public isDisabled: boolean = false;
  protected innerValue: boolean = false;

  private onTouchedCallback: TouchedCallback = EMPTY_FUNCTION;
  private onChangeCallback: ChangeCallback = EMPTY_FUNCTION;

  /**
   * Write a new value to the element.
   *
   * @param obj The value to write.
   */
  public writeValue(obj: any) {
    if (obj !== this.innerValue) {
      this.innerValue = obj;
    }
  }

  /**
   * Set the function to be called when the control receives a change event.
   *
   * @param fn The change event.
   */
  public registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  /**
   * Set the function to be called when the control receives a touch event.
   *
   * @param fn The change event.
   */
  public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  /**
   * This function is called on blur.
   */
  public onBlur() {
    this.onTouchedCallback();
  }
}
