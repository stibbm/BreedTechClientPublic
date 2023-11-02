import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateLineItemRequest, CreateLineItemResponse, GetAllLineItemsResponse} from '../model/LineItem';
import {DEFAULT_HEADERS} from '../constants/constants';
import {CREATE_LINE_ITEM_URL, GET_ALL_LINE_ITEMS_URL} from '../constants/routes';
import {AuthService} from './auth.service';
import {Options} from '../model/Options';
import {ApiEndpointsService} from "./api-endpoints.service";

@Injectable({
  providedIn: 'root'
})
export class LineItemService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private apiEndpointsService: ApiEndpointsService,
  ) { }

  // @ts-ignore
  async createLineItem(
    createLineItemRequest: CreateLineItemRequest
  ): Promise<CreateLineItemResponse>
  {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createLineItemResponse: CreateLineItemResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateLineItemResponse>await this.httpClient.post(await this.apiEndpointsService.createLineItem(),
        createLineItemRequest, options)
        .toPromise();
    return  createLineItemResponse;
  }

  async getAllLineItems(): Promise<GetAllLineItemsResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAllLineItemsResponse: GetAllLineItemsResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAllLineItemsResponse>await this.httpClient.post(await this.apiEndpointsService.getAllLineItems(), {}, options).toPromise();
    return getAllLineItemsResponse;
  }
}
