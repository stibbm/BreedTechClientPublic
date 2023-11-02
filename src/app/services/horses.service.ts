import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CreateHorseRequest,
  CreateHorseResponse,
  GetAllHorsesResponse,
  GetHorsesByOwnerIdRequest,
  GetHorsesByOwnerIdResponse,
  GetHorsesV2Response, GetHorsesWithActiveAppointmentResponse,
  GetHorsesWithLocationResponse,
  GetStallionsResponse,
  Horse, HorseV2,
  HorseWithLocation
} from '../model/Horse';
import {DEFAULT_HEADERS} from '../constants/constants';
import {
  CREATE_HORSE_URL,
  GET_ALL_HORSES_URL,
  GET_HORSES_BY_OWNER_ID_URL, GET_HORSES_V2_URL,
  GET_HORSES_WITH_LOCATION_URL, GET_STALLIONS_URL
} from '../constants/routes';
import {AuthService} from './auth.service';
import {KeyValueStorageService} from './key-value-storage.service';
import {AUTH_TOKEN_KEY} from '../constants/StorageKeys';
import {AuthToken} from '../model/Login';
import {Options} from '../model/Options';
import {HorseLocationService} from './horse-location.service';
import {ApiEndpointsService} from './api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class HorseService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private horseLocationService: HorseLocationService,
    private apiEndpointsService: ApiEndpointsService,
  ) {}

  async createHorse(createHorseRequest: CreateHorseRequest
  ): Promise<CreateHorseResponse>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const createHorseResponse: CreateHorseResponse = <CreateHorseResponse>await this.httpClient.post(
      await this.apiEndpointsService.createHorse(), createHorseRequest, options).toPromise();
    return createHorseResponse;
  }

  async getAllHorses(): Promise<GetAllHorsesResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAllHorsesResponse: GetAllHorsesResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAllHorsesResponse>await this.httpClient.post(await this.apiEndpointsService.getAllHorses(), {}, options).toPromise();
    return getAllHorsesResponse;
  }

  async getHorsesWithLocation(): Promise<GetHorsesWithLocationResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getHorsesWithLocationResponse: GetHorsesWithLocationResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetHorsesWithLocationResponse>await this.httpClient.post(
        await this.apiEndpointsService.getHorsesWithLocation(),{}, options).toPromise();
    console.log(getHorsesWithLocationResponse);
    return getHorsesWithLocationResponse;
  }

  // @ts-ignore
  async getHorsesByOwnerId(getHorsesByUserIdRequest: GetHorsesByOwnerIdRequest): Promise<GetHorsesByOwnerIdResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getHorsesByOwnerIdResponse: GetHorsesByOwnerIdResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetHorsesByOwnerIdResponse>await this.httpClient.post(
        await this.apiEndpointsService.getHorsesByOwnerId(), getHorsesByUserIdRequest, options).toPromise();
    return getHorsesByOwnerIdResponse;
  }

  async getStallions(): Promise<GetStallionsResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getStallionsResponse: GetStallionsResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetStallionsResponse>await this.httpClient.post(
        await this.apiEndpointsService.getStallions(), {}, options
      ).toPromise();
    return getStallionsResponse;
  }

  // @ts-ignore
  async getHorsesV2(): Promise<GetHorsesV2Response> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getHorsesV2Response: GetHorsesV2Response =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetHorsesV2Response>await this.httpClient.post(
        await this.apiEndpointsService.getHorsesV2(), {}, options
      ).toPromise();
    return getHorsesV2Response;
  }

  async getHorsesWithActiveAppointment(): Promise<GetHorsesWithActiveAppointmentResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getHorsesWithActiveAppointmentResponse: GetHorsesWithActiveAppointmentResponse =
      <GetHorsesWithActiveAppointmentResponse> await this.httpClient.post(
        await this.apiEndpointsService.getHorsesWithActiveAppointment(), {}, options
      ).toPromise();
    return getHorsesWithActiveAppointmentResponse;
  }

  async getHorsesWithActiveAppointmentSimple(): Promise<HorseV2[]> {
    const getHorsesWithActiveAppointmentResponse: GetHorsesWithActiveAppointmentResponse =
      await this.getHorsesWithActiveAppointment();
    const horseV2sList: HorseV2[] = getHorsesWithActiveAppointmentResponse.horsesList;
    return horseV2sList;
  }

}
