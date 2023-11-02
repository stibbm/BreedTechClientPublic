import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {
  CreateSemenCollectionLogByHorseIdRequest, CreateSemenCollectionLogByHorseIdResponse,
  CreateSemenCollectionLogRequest,
  CreateSemenCollectionLogResponse,
  GetSemenCollectionLogsResponse
} from '../model/SemenCollectionLog';
import {Options} from '../model/Options';
import {
  CREATE_SEMEN_COLLECTION_LOG_BY_HORSE_ID_URL,
  CREATE_SEMEN_COLLECTION_LOG_URL,
  GET_SEMEN_COLLECTION_LOGS_URL
} from '../constants/routes';
import {ApiEndpointsService} from "./api-endpoints.service";

@Injectable({
  providedIn: 'root'
})
export class SemenCollectionLogService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private apiEndpointsService: ApiEndpointsService
  ) { }

  async createSemenCollectionLog(
    createSemenCollectionLogRequest: CreateSemenCollectionLogRequest
  ): Promise<CreateSemenCollectionLogResponse>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createSemenCollectionLogResponse: CreateSemenCollectionLogResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateSemenCollectionLogResponse>
      await this.httpClient.post(await this.apiEndpointsService.createSemenCollectionLog(), createSemenCollectionLogRequest, options).toPromise();
    console.log('createSemenCollectionLogResponse:');
    console.log(createSemenCollectionLogResponse);
    return createSemenCollectionLogResponse;
  }

  async getSemenCollectionLogs(
  ): Promise<GetSemenCollectionLogsResponse>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getSemenCollectionLogsResponse: GetSemenCollectionLogsResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetSemenCollectionLogsResponse>
        await this.httpClient.post(await this.apiEndpointsService.getSemenCollectionLogs(), {}, options).toPromise();
    return getSemenCollectionLogsResponse;
  }

  async createSemenCollectionLogByHorseId(
    createSemenCollectionLogByHorseIdRequest: CreateSemenCollectionLogByHorseIdRequest
  ): Promise<CreateSemenCollectionLogByHorseIdResponse>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createSemenCollectionLogByHorseIdResponse: CreateSemenCollectionLogByHorseIdResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateSemenCollectionLogByHorseIdResponse>await this.httpClient.post(await this.apiEndpointsService.createSemenCollectionLogByHorseId(), createSemenCollectionLogByHorseIdRequest,
        options).toPromise();
    return createSemenCollectionLogByHorseIdResponse;
  }

}
