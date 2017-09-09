import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AppAccountSummaryComponent } from './account-summary.component';
import { CustomAction } from '../../models/custom-action.model';

describe('AppAccountSummaryComponent', () => {

  let comp: AppAccountSummaryComponent;
  let fixture: ComponentFixture<AppAccountSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppAccountSummaryComponent], // declare the test component
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AppAccountSummaryComponent);
    comp = fixture.componentInstance;
  });

  it('Should display a username', () => {
    let profileNameDebugElement: DebugElement = fixture.debugElement.query(By.css('.profile-name'));
    const expectedUsername = 'testUsername';
    comp.userName = expectedUsername;
    fixture.detectChanges();
    expect(profileNameDebugElement.nativeElement.textContent).toContain(expectedUsername);
  });

  it('Should have the image url in the component', () => {
    let imageDebugElement: DebugElement = fixture.debugElement.query(By.css('.img-circle'));
    const expectedUrl = 'test/image/url';
    comp.profileImageUrl = expectedUrl;
    fixture.detectChanges();
    expect(imageDebugElement.nativeElement.src).toContain(expectedUrl);
  });

  xit('Should trigger onCustomActionClick when clicked', () => {
    let debugElements: DebugElement = fixture.debugElement.query(By.all());
    let value: string = '';
    let customAction: CustomAction = {name: 'actionName', value: 'actionValue'};

    comp.customActions = [customAction];
    comp.onUserAction.subscribe((customActionValue: string) => value = customActionValue);
    fixture.detectChanges();
    debugElements.nativeElement.triggerEventHandler('click', null);
    expect(value).toBe(customAction.value);
  });
});
