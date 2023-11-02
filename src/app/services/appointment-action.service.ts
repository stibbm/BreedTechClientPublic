import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {
  CreateAppointmentActionByActionTypeRequest,
  CreateAppointmentActionByActionTypeResponse,
  CreateAppointmentActionRequest,
  CreateAppointmentActionResponse,
  GetAppointmentActionsByAppointmentIdRequest,
  GetAppointmentActionsByAppointmentIdResponse,
  GetAppointmentActionsByAppointmentIdV2Request,
  GetAppointmentActionsByAppointmentIdV2Response,
  GetAppointmentActionsByHorseIdRequest,
  GetAppointmentActionsByHorseIdResponse,
  GetAppointmentActionsByTimestampRequest,
  GetAppointmentActionsByTimestampResponse,
  GetAppointmentActionsByUserIdRequest,
  GetAppointmentActionsByUserIdResponse,
  GetAppointmentActionsByUserIdV2Request,
  GetAppointmentActionsByUserIdV2Response,
  GetAppointmentActionsResponse,
  GetAppointmentActionsV3Response
} from '../model/AppointmentAction';
import {Options} from '../model/Options';
import {
  CREATE_APPOINTMENT_ACTION_BY_ACTION_TYPE_URL,
  CREATE_APPOINTMENT_ACTION_URL,
  GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_URL, GET_APPOINTMENT_ACTIONS_BY_APPOINTMENT_ID_V2_URL,
  GET_APPOINTMENT_ACTIONS_URL, GET_APPOINTMENT_ACTIONS_V3_URL
} from '../constants/routes';
import {CreateAppointmentActionTypeRequest, CreateAppointmentActionTypeResponse} from "../model/AppointmentActionType";
import {ApiEndpointsService} from './api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentActionService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private apiEndpointsService: ApiEndpointsService,
  ) { }

  async createAppointmentAction(
    createAppointmentActionRequest: CreateAppointmentActionRequest
  ): Promise<CreateAppointmentActionResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createAppointmentActionResponse: CreateAppointmentActionResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateAppointmentActionResponse>await this.httpClient.post(
        await this.apiEndpointsService.createAppointmentAction(), createAppointmentActionRequest, options).toPromise();
    return createAppointmentActionResponse;
  }

  async getAppointmentActions():
    Promise<GetAppointmentActionsResponse>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAppointmentActionsResponse: GetAppointmentActionsResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAppointmentActionsResponse>await this.httpClient.post(
        await this.apiEndpointsService.getAppointmentActions(), {}, options
      ).toPromise();
    return getAppointmentActionsResponse;
  }

  async getAppointmentActionsByAppointmentId(getAppointmentActionsByAppointmentIdRequest: GetAppointmentActionsByAppointmentIdRequest):
    Promise<GetAppointmentActionsByAppointmentIdResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAppointmentActionsByAppointmentIdResponse: GetAppointmentActionsByAppointmentIdResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAppointmentActionsByAppointmentIdResponse>await this.httpClient.post(
        await this.apiEndpointsService.getAppointmentActionsByAppointmentId(),
        getAppointmentActionsByAppointmentIdRequest, options).toPromise();
    return getAppointmentActionsByAppointmentIdResponse;
  }

  // eslint-disable-next-line max-len
  async createAppointmentActionByActionType(createAppointmentActionByActionTypeRequest:
                                              CreateAppointmentActionByActionTypeRequest):
    Promise<CreateAppointmentActionByActionTypeResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createAppointmentActionByActionTypeResponse: CreateAppointmentActionByActionTypeResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions,max-len
      <CreateAppointmentActionByActionTypeResponse>await this.httpClient.post(
        await this.apiEndpointsService.createAppointmentActionByActionType(),
        createAppointmentActionByActionTypeRequest, options)
        .toPromise();
    return createAppointmentActionByActionTypeResponse;
  }

  async getAppointmentActionsV3(): Promise<GetAppointmentActionsV3Response> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAppointmentActionsV3Response: GetAppointmentActionsV3Response =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAppointmentActionsV3Response>await this.httpClient.post(
        await this.apiEndpointsService.getAppointmentActionsV3(), {}, options)
        .toPromise();
    return getAppointmentActionsV3Response;
  }

  async getAppointmentActionsByAppointmentIdV2(getAppointmentActionsByAppointmentIdV2Request:
                                                 GetAppointmentActionsByAppointmentIdV2Request):
    Promise<GetAppointmentActionsByAppointmentIdV2Response> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAppointmentActionsByAppointmentIdV2Response: GetAppointmentActionsByAppointmentIdV2Response =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions,max-len
      <GetAppointmentActionsByAppointmentIdV2Response>await this.httpClient.post(
        await this.apiEndpointsService.getAppointmentActionsByAppointmentIdV2(),
        getAppointmentActionsByAppointmentIdV2Request, options).toPromise();
    return getAppointmentActionsByAppointmentIdV2Response;
  }

  async getAppointmentActionsByUserId(getAppointmentActionsByUserIdRequest: GetAppointmentActionsByUserIdRequest):
    Promise<GetAppointmentActionsByUserIdResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAppointmentActionsByUserIdResponse: GetAppointmentActionsByUserIdResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAppointmentActionsByUserIdResponse>
      await this.httpClient.post(await this.apiEndpointsService.getAppointmentActionsByUserId(),
        getAppointmentActionsByUserIdRequest, options).toPromise();
    console.log('getAppointmentActionsByUserIdResponse: ');
    console.log(getAppointmentActionsByUserIdResponse);
    return getAppointmentActionsByUserIdResponse;
  }

  async getAppointmentActionsByUserIdV2(getAppointmentActionsByUserIdV2Request: GetAppointmentActionsByUserIdV2Request):
    Promise<GetAppointmentActionsByUserIdV2Response>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    console.log('GET_APPOINTMENT_ACTIONS_BY_USER_ID_V2_REQUEST');
    console.log(getAppointmentActionsByUserIdV2Request);
    const getAppointmentActionsByUserIdV2Response: GetAppointmentActionsByUserIdV2Response =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAppointmentActionsByUserIdV2Response>
      await this.httpClient.post(
      await this.apiEndpointsService.getAppointmentActionsByUserIdV2(), getAppointmentActionsByUserIdV2Request, options
    ).toPromise();
    return getAppointmentActionsByUserIdV2Response;
  }

  // @ts-ignore
  // eslint-disable-next-line max-len
  async getAppointmentActionsByHorseId(getAppointmentActionsByHorseIdRequest: GetAppointmentActionsByHorseIdRequest): Promise<GetAppointmentActionsByHorseIdResponse>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAppointmentActionsByHorseIdResponse: GetAppointmentActionsByHorseIdResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAppointmentActionsByHorseIdResponse>await this.httpClient.post(
        await this.apiEndpointsService.getAppointmentActionsByHorseId(),
        getAppointmentActionsByHorseIdRequest, options).toPromise();
    console.log('getAppointmentActionsByHorseIdResponse:');
    console.log(getAppointmentActionsByHorseIdResponse);
    return getAppointmentActionsByHorseIdResponse;
  }


  async getAppointmentActionsByTimestamp(getAppointmentActionsByTimestampRequest: GetAppointmentActionsByTimestampRequest):
    Promise<GetAppointmentActionsByTimestampResponse>{
    console.log('getAppointmentActionsByTimestamp');
    console.log(getAppointmentActionsByTimestampRequest);
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAppointmentActionsByTimestampResponse: GetAppointmentActionsByTimestampResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAppointmentActionsByTimestampResponse>await this.httpClient.post(
        await this.apiEndpointsService.getAppointmentActionsByTimestamp(),
        getAppointmentActionsByTimestampRequest,
        options
      ).toPromise();
    return getAppointmentActionsByTimestampResponse;
  }
}
