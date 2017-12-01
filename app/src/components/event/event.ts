import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the EventComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'event',
  templateUrl: 'event.html'
})
export class EventComponent implements OnInit{

  @Input() event: any;

  constructor() {}

  ngOnInit() {
    this.event.dhrmin = this.timeToDHRMIN(this.event.startTime);
  }

  private timeToDHRMIN(startTime){
    let timeTill = startTime - Date.now();
    let days = Math.floor(timeTill / 86400000);
    let hours = Math.floor(timeTill % (3600000 * 24) / 3600000);
    let minutes = Math.floor(timeTill % (3600000) / 60000);
    return `${days}d ${hours}hrs ${minutes}min`;
  }

}
