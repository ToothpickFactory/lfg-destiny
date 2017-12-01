import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EventComponent } from './event/event';
import { CreateEventModalComponent } from './create-event-modal/create-event-modal';
@NgModule({
	declarations: [
    EventComponent,
    CreateEventModalComponent
  ],
  imports: [IonicModule],
  entryComponents: [ CreateEventModalComponent ],
	exports: [
    EventComponent,
    CreateEventModalComponent
  ]
})
export class ComponentsModule {}
