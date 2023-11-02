import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  CreateStallRequest, CreateStallRequestContents,
  CreateStallResponse,
  CreateStallResponseContents, CreateStallSimpleRequest, CreateStallSimpleResponse, GetAllStallsOccupancyResponse,
  GetAllStallsResponse, GetEmptyStallsResponse
} from '../model/Stall';
import {DEFAULT_HEADERS} from '../constants/constants';
import {
  CREATE_STALL_CONTENT_URL, CREATE_STALL_SIMPLE_URL,
  CREATE_STALL_URL, GET_ALL_STALLS_OCCUPANCY_URL,
  GET_ALL_STALLS_URL,
  GET_EMPTY_STALLS_URL
} from '../constants/routes';
import {AuthService} from './auth.service';
import {Options} from '../model/Options';
import {ApiEndpointsService} from "./api-endpoints.service";

@Injectable({
  providedIn: 'root'
})
export class StallService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private apiEndpointsService: ApiEndpointsService,
  ) { }

  async createStall(createStallRequest: CreateStallRequest): Promise<CreateStallResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const createStallResponse: CreateStallResponse = <CreateStallResponse>await this.httpClient.post(
      await this.apiEndpointsService.createStall(), createStallRequest, options).toPromise();
    return createStallResponse;
  }

  async getAllStalls(): Promise<GetAllStallsResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const getAllStallsResponse: GetAllStallsResponse = <GetAllStallsResponse>await
      this.httpClient.post(await this.apiEndpointsService.getAllStalls(), {}, options).toPromise();
    return getAllStallsResponse;
  }

  async createStallContents(createStallRequestContents: CreateStallRequestContents): Promise<CreateStallResponseContents> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const createStallResponseContents: CreateStallResponseContents = <CreateStallResponseContents>
      await this.httpClient.post(await this.apiEndpointsService.createStallContent(), createStallRequestContents, options).toPromise();
    return createStallResponseContents;
  }

  async getEmptyStalls(): Promise<GetEmptyStallsResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getEmptyStallsResponse: GetEmptyStallsResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetEmptyStallsResponse>await this.httpClient.post(await this.apiEndpointsService.getEmptyStalls(), {}, options).toPromise();
    return getEmptyStallsResponse;
  }

  async getAllStallOccupancy(): Promise<GetAllStallsOccupancyResponse> {
    console.log('getAllStallOccupancy');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    console.log('sending getAllStallsOccupancyResponse:');
    const getAllStallsOccupancyResponse: GetAllStallsOccupancyResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAllStallsOccupancyResponse>await this.httpClient.post(await this.apiEndpointsService.getAllStallsOccupancy(), {}, options).toPromise();
    return getAllStallsOccupancyResponse;
  }

  async createStallSimple(createStallSimpleRequest: CreateStallSimpleRequest): Promise<CreateStallSimpleResponse> {
    console.log('createStallSimple');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createStallSimpleResponse: CreateStallSimpleResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateStallSimpleResponse> await this.httpClient.post(await this.apiEndpointsService.createStallSimple(), createStallSimpleRequest, options)
        .toPromise();
    console.log('createStallSimpleResponse');
    console.log(createStallSimpleResponse);
    return createStallSimpleResponse;
  }
}
