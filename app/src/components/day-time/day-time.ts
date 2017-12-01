import { Component } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';

const days = [
  {label: 'SUNDAY', value: 0},
  {label: 'MONDAY', value: 1},
  {label: 'TUESDAY', value: 2},
  {label: 'WEDNESDAY', value: 3},
  {label: 'THURSDAY', value: 4},
  {label: 'FRIDAY', value: 5},
  {label: 'SATURDAY', value: 6},
];

const hours = [
  {label: '1', value: 1},
  {label: '2', value: 2},
  {label: '3', value: 3},
  {label: '4', value: 4},
  {label: '5', value: 5},
  {label: '6', value: 6},
  {label: '7', value: 7},
  {label: '8', value: 8},
  {label: '9', value: 9},
  {label: '10', value: 10},
  {label: '11', value: 11},
  {label: '12', value: 12}
];

const minutes = [
  {label: '00', value: 0},
  {label: '15', value: 15},
  {label: '30', value: 30},
  {label: '45', value: 45}
];

const ampm = [
  {label: 'AM', value: 0},
  {label: 'PM', value: 1}
];


@Component({
  selector: 'day-time',
  templateUrl: 'day-time.html'
})
export class DayTimeComponent {

  text: string;
  startTime: any;
  days: any;
  

  constructor() {
    let MIN_OFFSET = 10;
    let now = moment();
    let next15 = Math.ceil((now.minute() + MIN_OFFSET)/15) * 15;
    if(next15 > 59){
      now.add(1, 'hours');
      next15 = 0;
    }
    this.startTime = {};
    this.startTime.day = now.day();
    this.days = this.organizeAndFormatDays( now, days );
    this.startTime.hour = now.hour() > 12 ? now.hour() - 12 : now.hour();
    this.startTime.minute = next15;
    this.startTime.am = now.hour() > 12 ? 1 : 0;
  }


  private organizeAndFormatDays( now, days ) {
    // Find "today" and mark it as such to help clarify the
    // distinction between this week and next
    var todayDayOfWeek  = moment().format('dddd').toLowerCase();
    var indexOfToday    = _.findIndex( days, function( day ) {
      return day.label.toLowerCase() == todayDayOfWeek;
    });

    if(indexOfToday) {
      var valueOfToday = days[indexOfToday].value;
      days[indexOfToday].label = "TODAY";

      // Calculate the number of days after today each day is
      days = _.map(days, function(day) {
        day.daysUntil = 0;

        if(day.value < valueOfToday) {
          day.daysUntil = 7 - valueOfToday + day.value;
        } else if(day.value > valueOfToday) {
          day.daysUntil = day.value - valueOfToday;
        }

        return day;
      });


      //Sort by number of days until so today is first
      //And the days are presented in the order they will occur
      days = _.sortBy(days, "daysUntil");
    }

    return days;
  }

  public updateTime(){
    let startDay = this.startTime.day;
    let daysTillGame = startDay < moment().day() ? startDay + 7 : startDay;

    let startTime = moment({
      day: moment().date() + (daysTillGame -  moment().day()),
      hour: this.startTime.am ? this.startTime.hour + 12 : this.startTime.hour,
      minute: this.startTime.minute
    }).valueOf();

    return startTime;
  };

}

