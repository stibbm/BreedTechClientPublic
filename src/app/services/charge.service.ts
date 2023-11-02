import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {
  CreateChargeByHorseIdRequest,
  CreateChargeByHorseIdResponse,
  CreateChargeRequest,
  CreateChargeResponse, GetChargesByUserIdRequest, GetChargesResponse
} from '../model/Charge';
import {Options} from '../model/Options';
import {CreateHorseLocationResponse} from '../model/HorseLocation';
import {
  CREATE_CHARGE_BY_HORSE_ID_URL,
  CREATE_CHARGE_URL,
  GET_ALL_HORSES_URL,
  GET_CHARGES_URL
} from '../constants/routes';
import {ApiEndpointsService} from './api-endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class ChargeService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private apiEndpointsService: ApiEndpointsService,
  ) {}

  async createCharge(
    createChargeRequest: CreateChargeRequest
  ): Promise<CreateChargeResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createChargeResponse: CreateChargeResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateChargeResponse> await this.httpClient.post(await this.apiEndpointsService.createCharge(),
        createChargeRequest, options).toPromise();
    return createChargeResponse;
  }

  async createChargeByHorseId(
    createChargeByHorseIdRequest: CreateChargeByHorseIdRequest
  ): Promise<CreateChargeByHorseIdResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createChargeByHorseIdResponse: CreateChargeByHorseIdResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateChargeByHorseIdResponse> await this.httpClient.post(await this.apiEndpointsService.createChargeByHorseId(),
        createChargeByHorseIdRequest, options).toPromise();
    return createChargeByHorseIdResponse;
  }

  async getCharges(): Promise<GetChargesResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getChargesResponse: GetChargesResponse =
      <GetChargesResponse> await this.httpClient.post(await this.apiEndpointsService.getCharges(), {}, options).toPromise();
    return getChargesResponse;
  }

  async getChargesByUserId(userId: number) {
    const getChargesByUserIdRequest: GetChargesByUserIdRequest = {
      userId
    };

  }
}
