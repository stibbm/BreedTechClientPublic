import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  CreateHorseLocationRequest,
  CreateHorseLocationResponse,
  GetAllHorseLocationsResponse, MoveHorseRequest, MoveHorseResponse
} from '../model/HorseLocation';
import {DEFAULT_HEADERS} from '../constants/constants';
import {CREATE_HORSE_LOCATION_URL, GET_ALL_HORSE_LOCATIONS_URL} from '../constants/routes';
import {KeyValueStorageService} from './key-value-storage.service';
import {AuthService} from './auth.service';
import {Options} from '../model/Options';
import {ApiEndpointsService} from './api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class HorseLocationService {

  constructor(
    private httpClient: HttpClient,
    private keyValueStorageService: KeyValueStorageService,
    private authService: AuthService,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  async createHorseLocation(
    createHorseLocationRequest: CreateHorseLocationRequest
  ): Promise<CreateHorseLocationResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const createHorseLocationResponse = <CreateHorseLocationResponse>
      await this.httpClient.post(await this.apiEndpointsService.createHorseLocation(), createHorseLocationRequest, options).toPromise();
    return createHorseLocationResponse;
  }

  async getAllHorseLocations(): Promise<GetAllHorseLocationsResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAllHorseLocationsResponse: GetAllHorseLocationsResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAllHorseLocationsResponse> await this.httpClient.post(await this.apiEndpointsService.getAllHorseLocations(),
        {}, options).toPromise();
    return getAllHorseLocationsResponse;
  }

  async moveHorse(moveHorseRequest: MoveHorseRequest): Promise<MoveHorseResponse> {
    console.log('MOVE HORSE');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const moveHorseResponse: MoveHorseResponse =
              // @ts-ignore
              // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
              <MoveHorseResponse> await this.httpClient.post(
                      // @ts-ignore
                      await this.apiEndpointsService.moveHorse(), moveHorseRequest, options).toPromise();
    return moveHorseResponse;
  }

}
