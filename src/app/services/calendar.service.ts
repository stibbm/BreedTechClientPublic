import { Injectable } from '@angular/core';
import {ApiEndpointsService} from './api-endpoints.service';
import {HttpClient} from '@angular/common/http';
import {GetMonthDatesRequest, GetMonthDatesResponse} from '../model/CalendarDate';
import {AuthService} from './auth.service';
import {Options} from '../model/Options';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(
    private apiEndpointsService: ApiEndpointsService,
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  async getWeekDates(getMonthDatesRequest: GetMonthDatesRequest): Promise<GetMonthDatesResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getMonthDatesResponse: GetMonthDatesResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetMonthDatesResponse>
      await this.httpClient.post(await this.apiEndpointsService.getMonthDates(), getMonthDatesRequest, options)
        .toPromise();
    return getMonthDatesResponse;
  }
}
