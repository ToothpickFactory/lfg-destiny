import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {EventsProvider} from '../../providers/events/events';


const categories = [
  {
    "name": "Leviathin",
    "subcategories": [
      {
        "name": "Normal"
      },
      {
        "name": "Prestige"
      },
      {
        "name": "Challange"
      }
    ]
  },
  {
    "name": "Night Fall",
    "subategories": [
      {
        "name": "Normal"
      },
      {
        "name": "Prestige"
      }
    ]
  },
  {
    "name": "Crucible",
    "subcategories": [
      {
        "name": "Iron Banner"
      },
      {
        "name": "Trials of the Nine"
      }
    ]
  }
]


@Component({
  selector: 'create-event-modal',
  templateUrl: 'create-event-modal.html'
})
export class CreateEventModalComponent {
  public categories;
  public event;

  constructor(public viewCtrl: ViewController, public eventsProvider: EventsProvider) {
    this.categories = categories;
    this.event = {};
  }

  public createEvent(event){
    this.eventsProvider.createEvent(event)
      .then(res => console.log(res));
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
