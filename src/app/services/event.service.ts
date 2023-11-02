import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {ApiEndpointsService} from './api-endpoints.service';
import {
  CreateEventWithTimeZoneRequest,
  CreateEventWithTimeZoneResponse,
  GetEventsWithTimeZoneRequest,
  GetEventsWithTimeZoneResponse
} from '../model/EventWithTimeZone';
import {Options} from '../model/Options';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  async getEventsWithTimeZone(
    getEventsWithTimeZoneRequest: GetEventsWithTimeZoneRequest
  ): Promise<GetEventsWithTimeZoneResponse>
  {
    console.log('getEventsWithTimeZone');
    console.log(getEventsWithTimeZoneRequest);
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getEventsWithTimeZoneResponse: GetEventsWithTimeZoneResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetEventsWithTimeZoneResponse>await this.httpClient.post(
        await this.apiEndpointsService.getEventsWithTimeZone(), getEventsWithTimeZoneRequest, options
      ).toPromise();
    console.log('getEventsWithTimeZoneResponse');
    console.log(getEventsWithTimeZoneResponse);
    return getEventsWithTimeZoneResponse;
  }

  async createEventWithTimeZone(
    createEventWithTimeZoneRequest: CreateEventWithTimeZoneRequest
  ): Promise<CreateEventWithTimeZoneResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    console.log('createEventWithTimeZone');
    console.log(createEventWithTimeZoneRequest);
    const createEventWithTimeZoneResponse: CreateEventWithTimeZoneResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateEventWithTimeZoneResponse>await this.httpClient.post(
        await this.apiEndpointsService.createEventWithTimestamp(), createEventWithTimeZoneRequest, options
      ).toPromise();
    return createEventWithTimeZoneResponse;
  }

}
