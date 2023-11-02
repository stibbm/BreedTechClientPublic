import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';
import {CalendarDate, GetMonthDatesRequest, GetMonthDatesResponse} from '../../../model/CalendarDate';
import {CalendarService} from '../../../services/calendar.service';

@Component({
  selector: 'app-weekday-calendar',
  templateUrl: './weekday-calendar.component.html',
  styleUrls: ['./weekday-calendar.component.scss'],
})
export class WeekdayCalendarComponent implements OnInit {

  calendarDatesList: CalendarDate[];
  isCalendarDatesLoaded = false;
  scheduledEvents: [];

  constructor(
    private loaderService: LoaderService,
    private calendarService: CalendarService
  ) {}

  async ngOnInit() {
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.loaderService.autoLoader();
    const getMonthDatesRequest: GetMonthDatesRequest = {
      yearNumber: 2022,
      monthNumber: 1
    };
    const getMonthDatesResponse: GetMonthDatesResponse =
      await this.calendarService.getWeekDates(getMonthDatesRequest);
    this.isCalendarDatesLoaded = true;
    console.log('getMonthDatesResponse');
    console.log(getMonthDatesResponse);
    await this.loaderService.closeLoader();
  }

}
