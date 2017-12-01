import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EventComponent } from './event/event';
import { CreateEventModalComponent } from './create-event-modal/create-event-modal';
import { DayTimeComponent } from './day-time/day-time';
@NgModule({
	declarations: [
    EventComponent,
    CreateEventModalComponent,
    DayTimeComponent
  ],
  imports: [IonicModule],
  entryComponents: [ CreateEventModalComponent ],
	exports: [
    EventComponent,
    CreateEventModalComponent,
    DayTimeComponent
  ]
})
export class ComponentsModule {}
