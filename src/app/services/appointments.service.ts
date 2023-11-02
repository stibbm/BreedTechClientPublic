import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {
  CreateAppointmentContentRequest,
  CreateAppointmentContentResponse,
  CreateAppointmentRequest,
  CreateAppointmentResponse,
  CreateAppointmentV2Request,
  CreateAppointmentV2Response,
  GetActiveAppointmentsByHorseIdRequest,
  GetActiveAppointmentsByHorseIdResponse,
  GetAllAppointmentsResponse,
  GetAppointmentAmountDueRequest,
  GetAppointmentAmountDueResponse,
  GetAppointmentsByHorseIdRequest,
  GetAppointmentsByHorseIdResponse,
  GetAppointmentsByUserIdRequest,
  GetAppointmentsByUserIdResponse,
  GetAppointmentsV2Request,
  GetAppointmentsV2Response,
  GetAppointmentV2ByIdRequest,
  GetAppointmentV2ByIdResponse,
  UpdateAppointmentStatusRequest,
  UpdateAppointmentStatusResponse
} from '../model/Appointment';
import {
  CREATE_APPOINTMENT_CONTENT_URL,
  CREATE_APPOINTMENT_URL, CREATE_APPOINTMENTV2_URL,
  CREATE_STALL_CONTENT_URL, GET_ACTIVE_APPOINTMENTS_BY_HORSE_ID_URL,
  GET_ALL_APPOINTMENTS_URL, GET_APPOINTMENTSV2_URL, UPDATE_APPOINTMENT_STATUS_URL
} from '../constants/routes';
import {AuthService} from './auth.service';
import {KeyValueStorageService} from './key-value-storage.service';
import {AUTH_TOKEN_KEY} from '../constants/StorageKeys';
import {Options} from '../model/Options';
import {ApiEndpointsService} from './api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private apiEndpointsService: ApiEndpointsService,
  ) {}

  async createAppointment(
    createAppointmentRequest: CreateAppointmentRequest
  ): Promise<CreateAppointmentResponse>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createAppointmentResponse: CreateAppointmentResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateAppointmentResponse>await this.httpClient.post(
        await this.apiEndpointsService.createAppointmentActionType(), createAppointmentRequest, options
      ).toPromise();
    return createAppointmentResponse;
  }

  async createAppointmentContent(
    createAppointmentContentRequest: CreateAppointmentContentRequest
  ): Promise<CreateAppointmentContentResponse>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createAppointmentContentResponse: CreateAppointmentContentResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateAppointmentContentResponse>await this.httpClient.post(
        await this.apiEndpointsService.createAppointmentContent(), createAppointmentContentRequest, options).toPromise();
    return createAppointmentContentResponse;
  }

  async createAppointmentV2(createAppointmentV2Request: CreateAppointmentV2Request): Promise<CreateAppointmentV2Response>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createAppointmentV2Response: CreateAppointmentV2Response =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateAppointmentV2Response>await this.httpClient
        .post(await this.apiEndpointsService.createAppointmentV2(), createAppointmentV2Request,
        options).toPromise();
    return createAppointmentV2Response;
  }

  async getAllAppointments(): Promise<GetAllAppointmentsResponse>
  {
    console.log('getAllAppointments request from appointments service');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAllAppointmentsResponse: GetAllAppointmentsResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAllAppointmentsResponse>await this.httpClient.post(await this.apiEndpointsService.getAllAppointments(), {}, options).toPromise();
    console.log('getAllAppointmentsResponse:');
    console.log(getAllAppointmentsResponse);
    return getAllAppointmentsResponse;
  }

  async getActiveAppointmentsByHorseId(getActiveAppointmentsByHorseIdRequest: GetActiveAppointmentsByHorseIdRequest):
    Promise<GetActiveAppointmentsByHorseIdResponse>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getActiveAppointmentsByHorseIdResponse: GetActiveAppointmentsByHorseIdResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetActiveAppointmentsByHorseIdResponse>await this.httpClient.post(await this.apiEndpointsService.getActiveAppointmentsByHorseId(),
        getActiveAppointmentsByHorseIdRequest, options).toPromise();
    return getActiveAppointmentsByHorseIdResponse;
  }

  async getAppointmentsV2():
    Promise<GetAppointmentsV2Response>
  {
    console.log('getAppointmentsV2');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAppointmentsV2Response: GetAppointmentsV2Response =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAppointmentsV2Response>await this.httpClient.post(await this.apiEndpointsService.getAppointmentsV2(),
        {}, options).toPromise();
    console.log('getAppointmentsV2');
    return getAppointmentsV2Response;
  }

  async updateAppointmentStatus(
    updateAppointmentStatusRequest: UpdateAppointmentStatusRequest
  ): Promise<UpdateAppointmentStatusResponse>
  {
    console.log('updateAppointmentStatus');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const updateAppointmentStatusResponse: UpdateAppointmentStatusResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <UpdateAppointmentStatusResponse>await this.httpClient
        .post(await this.apiEndpointsService.updateAppointmentStatus(), updateAppointmentStatusRequest, options).toPromise();
    return updateAppointmentStatusResponse;
  }

  async getAppointmentAmountDue(
    getAppointmentAmountDueRequest: GetAppointmentAmountDueRequest
  ): Promise<GetAppointmentAmountDueResponse>
  {
    console.log('getAppointmentAmountDue');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const getAppointmentAmountDueResponse: GetAppointmentAmountDueResponse = <GetAppointmentAmountDueResponse> await this.httpClient.post(
      await this.apiEndpointsService.getAppointmentAmountDue(), getAppointmentAmountDueRequest, options
    ).toPromise();
    console.log('getAppointmentAmountDueResponse');
    console.log(getAppointmentAmountDueResponse);
    return getAppointmentAmountDueResponse;
  }

  async getAppointmentV2ById(getAppointmentV2ByIdRequest: GetAppointmentV2ByIdRequest):
    Promise<GetAppointmentV2ByIdResponse>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAppointmentV2ByIdUrl: string = await this.apiEndpointsService.getAppointmentV2ById();
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const getAppointmentV2ByIdResponse: GetAppointmentV2ByIdResponse = <GetAppointmentV2ByIdResponse>
      await this.httpClient.post(getAppointmentV2ByIdUrl, getAppointmentV2ByIdRequest, options).toPromise();
    return getAppointmentV2ByIdResponse;
  }

  async getAppointmentsByUserId(getAppointmentsByUserIdRequest: GetAppointmentsByUserIdRequest):
    Promise<GetAppointmentsByUserIdResponse>
  {
    console.log('getAppointmentsByUserId');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAppointmentsByUserIdUrl: string = await this.apiEndpointsService.getAppointmentsByUserId();
    const getAppointmentsByUserIdResponse: GetAppointmentsByUserIdResponse = <GetAppointmentsByUserIdResponse>
      await this.httpClient.post(
      getAppointmentsByUserIdUrl, getAppointmentsByUserIdRequest, options
    ).toPromise();
    console.log(getAppointmentsByUserIdResponse);
    return getAppointmentsByUserIdResponse;
  }

  async getAppointmentsByHorseId(getAppointmentsByHorseIdRequest: GetAppointmentsByHorseIdRequest)
    : Promise<GetAppointmentsByHorseIdResponse>
  {
    const horseId: number = getAppointmentsByHorseIdRequest.horseId;
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    console.log('getAppointmentsByHorseId');
    const getAppointmentsByHorseIdUrl: string = await this.apiEndpointsService.getAppointmentsByHorseId();
    const getAppointmentsByHorseIdResponse: GetAppointmentsByHorseIdResponse = <GetAppointmentsByHorseIdResponse>
      await this.httpClient.post(getAppointmentsByHorseIdUrl, getAppointmentsByHorseIdRequest, options).toPromise();
    return getAppointmentsByHorseIdResponse;
  }

}
