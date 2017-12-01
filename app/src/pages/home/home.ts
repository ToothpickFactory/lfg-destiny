import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { EventsProvider } from '../../providers/events/events'
import { CreateEventModalComponent } from '../../components/create-event-modal/create-event-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public events: [any];

  constructor (
    public navCtrl: NavController,
    public eventsProvider: EventsProvider,
    public modalCtrl: ModalController
  ) {}

  ngOnInit () {
    this.events = this.eventsProvider.getEvents();

  }

  public triggerCreateEventModal () {
    let createEventModal = this.modalCtrl.create(CreateEventModalComponent, { });
    createEventModal.onDidDismiss(data => {
      console.log(data);
    });
    createEventModal.present();
  }

}
