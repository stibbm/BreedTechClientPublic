import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {
  CreateAppointmentActionTypeRequest,
  CreateAppointmentActionTypeResponse,
  GetAppointmentActionTypesByCompanyIdResponse, GetAppointmentActionTypesDisplayableResponse
} from '../model/AppointmentActionType';
import {Options} from '../model/Options';
import {
  CreateAppointmentActionResponse,
  GetAppointmentActionsByAppointmentIdResponse
} from '../model/AppointmentAction';
import {
  CREATE_APPOINTMENT_ACTION_TYPE_URL,
  GET_APPOINTMENT_ACTION_TYPE_DISPLAYABLES_URL,
  GET_APPOINTMENT_ACTION_TYPES_BY_COMPANY_ID_URL
} from '../constants/routes';
import {ApiEndpointsService} from './api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentActionTypeService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private apiEndpointsService: ApiEndpointsService,
  ) { }

  async createAppointmentActionType(
    createAppointmentActionTypeRequest: CreateAppointmentActionTypeRequest
  ): Promise<CreateAppointmentActionTypeResponse>
  {
    console.log('createAppointmentActionType: ');
    console.log(createAppointmentActionTypeRequest);
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createAppointmentActionTypeResponse: CreateAppointmentActionTypeResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateAppointmentActionTypeResponse>await this.httpClient.post(
        await this.apiEndpointsService.createAppointmentActionType(),
        createAppointmentActionTypeRequest, options).toPromise();
    return createAppointmentActionTypeResponse;
  }

  async getAppointmentActionTypesByCompanyId():
    Promise<GetAppointmentActionTypesByCompanyIdResponse>
  {
    console.log('getAppointmentActionTypesByCompanyId');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAppointmentActionTypesByCompanyIdResponse: GetAppointmentActionTypesByCompanyIdResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAppointmentActionTypesByCompanyIdResponse>
      await this.httpClient.post(
        await this.apiEndpointsService.getAppointmentActionTypesByCompanyId(), {}, options).toPromise();
    return getAppointmentActionTypesByCompanyIdResponse;
  }

  async getAppointmentActionTypeDisplayables():
    Promise<GetAppointmentActionTypesDisplayableResponse>
  {
    console.log('getAppointmentActionTypeDisplayables');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAppointmentActionTypesDisplayableResponse: GetAppointmentActionTypesDisplayableResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAppointmentActionTypesDisplayableResponse>
        await this.httpClient.post(
          await this.apiEndpointsService.getAppointmentActionTypeDisplayables(), {}, options).toPromise();
    return getAppointmentActionTypesDisplayableResponse;
  }

  async getAppointmentActionsByTimestamp() {

  }

}
