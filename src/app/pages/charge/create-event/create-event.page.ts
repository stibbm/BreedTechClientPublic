import { Component, OnInit } from '@angular/core';
import {EventService} from "../../../services/event.service";
import {CreateEventWithTimeZoneRequest, CreateEventWithTimeZoneResponse} from "../../../model/EventWithTimeZone";
import {LoaderService} from "../../../services/loader.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {

  description: string;
  dateString = new Date().toISOString();

  constructor(
    private eventService: EventService,
    private loaderService: LoaderService,
    private router: Router,
    private authService: AuthService,
  ){}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    console.log('ngOnInit');
  }

  async onCreateEventButtonPressed() {
    await this.loaderService.autoLoader();
    console.log('onCreateEventButtonPressed');
    console.log(this.dateString);
    const date: Date = new Date(this.dateString);
    const timestamp: number = date.getTime() / 1000;
    console.log('timestamp');
    console.log(timestamp);
    const createEventWithTimeZoneRequest: CreateEventWithTimeZoneRequest = {
      timestamp,
      description: this.description
    };
    const createEventWithTimeZoneResponse: CreateEventWithTimeZoneResponse =
      await this.eventService.createEventWithTimeZone(createEventWithTimeZoneRequest);
    console.log(createEventWithTimeZoneResponse);
    console.log(createEventWithTimeZoneResponse.event);
    await this.loaderService.closeLoader();
    alert('created event');
    await this.router.navigate(['events']);
  }
}
