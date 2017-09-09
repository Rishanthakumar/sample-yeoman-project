import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AppNotificationComponent } from './notification.component';
import { TimeDurationPipe } from '../../pipes/time-duration.pipe';
import { Notification } from '../../models/notification.model';
import { StopPropagationDirective } from '../../directives/stop-propagation.directive';
import { NotificationCollection } from '../../models/notification-collection.model';

describe('AppNotificationComponent', () => {

  let comp: AppNotificationComponent;
  let fixture: ComponentFixture<AppNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppNotificationComponent, TimeDurationPipe, StopPropagationDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNotificationComponent);
    comp = fixture.componentInstance;
  });

  xit('Should display a notification title', () => {
    let notificationDebugElement: DebugElement = fixture.debugElement.query(By.css('.time-stamp'));
    const expectedNotificationTitle = 'testTitle ';

    let notification: Notification = {title: 'title', message: 'testMessage', time: new Date('2015/2/15')};
    let notificationCollection: NotificationCollection = {count: 2, items: [notification, notification]};
    comp.notifications = notificationCollection ;
    comp.limit = 2;
    fixture.detectChanges();
    expect(notificationDebugElement.nativeElement.textContent).toContain(expectedNotificationTitle);
  });

  it('Should show the notification count', () => {
    let notificationCountElement: DebugElement = fixture.debugElement.query(By.css('.notification-count'));

    let notification: Notification = {title: 'title', message: 'testMessage', time: new Date('2015/2/15')};
    let notificationCollection: NotificationCollection = {count: 2, items: [notification, notification]};

    comp.notifications = notificationCollection;
    fixture.detectChanges();
    expect(notificationCountElement.nativeElement.textContent).toContain(notificationCollection.count);
  });

  xit('Should call onShowAllClick', () => {
    let allNotificationsElement: DebugElement = fixture.debugElement.queryAll(By.all())[6];
    allNotificationsElement.nativeElement.triggerEventHandler('click', null);
    comp.showAllNotifications.subscribe();
  });
});
