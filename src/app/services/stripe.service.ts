import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {ApiEndpointsService} from './api-endpoints.service';
import {
  CreateStripePaymentLinkRequest,
  CreateStripePaymentLinkResponse,
  GetStripePaymentLinkRequest, GetStripePaymentLinkResponse
} from '../model/StripePaymentLink';
import {Options} from '../model/Options';
import {
  CreateStripeProductRequest,
  CreateStripeProductResponse,
  GetStripeProductRequest,
  GetStripeProductResponse
} from '../model/StripeProduct';
import {
  CreateStripePriceRequest,
  CreateStripePriceResponse,
  GetStripePriceRequest,
  GetStripePriceResponse
} from '../model/StripePrice';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(
          private httpClient: HttpClient,
          private authService: AuthService,
          private apiEndpointsService: ApiEndpointsService
  ) {}

  async createStripePaymentLink(
          createStripePaymentLinkRequest: CreateStripePaymentLinkRequest
  ): Promise<CreateStripePaymentLinkResponse>
  {
    console.log('CreateStripePaymentLink');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createStripePaymentLinkResponse: CreateStripePaymentLinkResponse = <CreateStripePaymentLinkResponse>await this.httpClient.post(
      await this.apiEndpointsService.createStripePaymentLink(), createStripePaymentLinkRequest, options).toPromise();
    return createStripePaymentLinkResponse;
  }

  async createStripeProduct(
    createStripeProductRequest: CreateStripeProductRequest
  ): Promise<CreateStripeProductResponse> {
    console.log('createStripeProductResponse');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createStripeProductResponse: CreateStripeProductResponse = <CreateStripeProductResponse> await this.httpClient.post(
      await this.apiEndpointsService.createStripeProduct(), createStripeProductRequest, options
    ).toPromise();
    return createStripeProductResponse;
  }

  async createStripePrice(
    createStripePriceRequest: CreateStripePriceRequest
  ): Promise<CreateStripePriceResponse>
  {
    console.log('createStripePrice');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const createStripePriceResponse: CreateStripePriceResponse = <CreateStripePriceResponse> await this.httpClient.post(
      await this.apiEndpointsService.createStripePrice(), createStripePriceRequest, options).toPromise();
    return createStripePriceResponse;
  }

  async getStripeProduct(getStripeProductRequest: GetStripeProductRequest): Promise<GetStripeProductResponse>
  {
    console.log('getStripeProduct');
    console.log(getStripeProductRequest);
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getStripeProductResponse: GetStripeProductResponse = <GetStripeProductResponse> await this.httpClient.post(
      await this.apiEndpointsService.getStripeProduct(), getStripeProductRequest, options
    ).toPromise();
    return getStripeProductResponse;
  }

  async getStripePrice(getStripePriceRequest: GetStripePriceRequest): Promise<GetStripePriceResponse>
  {
    console.log('getStripePrice');
    console.log(getStripePriceRequest);
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const getStripePriceResponse: GetStripePriceResponse = <GetStripePriceResponse> await this.httpClient.post(
      await this.apiEndpointsService.getStripePrice(), getStripePriceRequest, options
    ).toPromise();
    return getStripePriceResponse;
  }

  async getStripePaymentLink(getStripePaymentLinkRequest: GetStripePaymentLinkRequest): Promise<GetStripePaymentLinkResponse>
  {
    console.log('getStripePaymentLink');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getStripePaymentLinkResponse: GetStripePaymentLinkResponse = <GetStripePaymentLinkResponse> await this.httpClient.post(
      await this.apiEndpointsService.getStripePaymentLink(), getStripePaymentLinkRequest, options
    ).toPromise();
    console.log(getStripePaymentLinkResponse);
    return getStripePaymentLinkResponse;
  }

}
