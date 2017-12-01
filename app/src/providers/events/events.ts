import { Injectable } from '@angular/core';
import * as Evently from 'eventlyjs';

const evently = Evently.init({
  "url": "http://45.55.247.237:3003",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJTSlh4Y1Ezc2IifQ.Q1vx0EsxOX04Nx3k1Ia9zP6e7-vABNdZevkaGkRlHLE"
});

@Injectable()
export class EventsProvider {

  constructor() {}

  public getEvents(){
    return evently.events.search()
      .then(eventsRes =>  eventsRes.map(this.transformToLFG))
  }

  public createEvent(event){
    let eventlyEvent = this.transformToEvently(event);
    return evently.events.create(eventlyEvent);
  }

  public transformToEvently (event) {
    let date = new Date(event.startTime);

    let eventlyEvent = {
      "tags": [
        event.system,
        event.category.name,
        event.subcategory.name
      ],
      "title": event.title,
      "slots": event.slots,
      "startTime": date.getMilliseconds(),
      "participants": event.participants || [],
      "owner": {
        "id": "1q2w3e",
        "name": "James Gear"
      }
    }

    return eventlyEvent;
  }

  public transformToLFG (event) {
    let LFGEvent = {
      "system": event.tags[0],
      "category": event.tags[1],
      "subcategory": event.tags[2],
      "title": event.title,
      "slots": event.slots,
      "startTime": event.startTime,
      "participants": event.participants || [],
      "owner": event.owner
    }

    return LFGEvent;
  }

}
