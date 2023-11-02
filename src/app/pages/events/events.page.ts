import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import {
  EventWithTimeZone,
  GetEventsWithTimeZoneRequest,
  GetEventsWithTimeZoneResponse
} from '../../model/EventWithTimeZone';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventWithTimeZonesList: EventWithTimeZone[];
  isEventWithTimeZonesListLoaded = false;

  displayColumns: string[] = [
    'description',
    'localDateTimeString'
  ];

  constructor(
    private eventService: EventService,
    private router: Router,
    private authService: AuthService
  ){}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    console.log('ngOnInit');
  }

  async ionViewWillEnter() {
    console.log('ionViewWillEnter');
    const timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const getEventsWithTimeZoneRequest: GetEventsWithTimeZoneRequest = {
      timeZoneString: timeZone,
    };
    const getEventsWithTimeZoneResponse: GetEventsWithTimeZoneResponse =
      await this.eventService.getEventsWithTimeZone(getEventsWithTimeZoneRequest);
    console.log('getEventsWithTimeZoneResponse');
    console.log(getEventsWithTimeZoneResponse);
    const eventWithTimeZonesList: EventWithTimeZone[] = getEventsWithTimeZoneResponse.eventWithTimeZonesList;
    this.eventWithTimeZonesList = eventWithTimeZonesList;
    this.isEventWithTimeZonesListLoaded = true;
  }

  async onCreateEventButtonPressed() {
    console.log('onCreateEventButtonPressed');
    await this.router.navigate(['/create-event']);
  }

  async onSortEventsByDateButtonPressed(mostRecentFirst: boolean) {
    console.log('onSortEventsByDate');
    const copiedEventWithTimeZonesList: EventWithTimeZone[] = [];
    for (var i=0;i<this.eventWithTimeZonesList.length;i++) {
      const eventWithTimeZone: EventWithTimeZone = this.eventWithTimeZonesList[i];
      copiedEventWithTimeZonesList.push(eventWithTimeZone);
    }
    const sortedEventWithTimeZonesList: EventWithTimeZone[] =
      copiedEventWithTimeZonesList.sort((a, b) => (a.timestamp > b.timestamp) ? 1 : -1);
    this.eventWithTimeZonesList = sortedEventWithTimeZonesList;
  }
}
