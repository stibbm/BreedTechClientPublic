import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  CreateUserRequest, CreateUserV2Request, CreateUserV2Response,
  GetAllUsersResponse, GetUserByAuthTokenRequest, GetUserByAuthTokenResponse,
  GetUserByEmailAddressRequest,
  GetUserByEmailAddressResponse, GetUsersResponse, User
} from '../model/User';
import {CreateUserResponse} from '../model/User';
import {
  CREATE_USER_URL, CREATE_USER_V2_URL,
  GET_ALL_USERS_URL,
  GET_USER_BY_AUTH_TOKEN_URL,
  GET_USER_BY_EMAIL_ADDRESS_URL, GET_USERS_URL
} from '../constants/routes';
import { AuthService } from './auth.service';
import {Options} from '../model/Options';
import {DEFAULT_HEADERS} from '../constants/constants';
import {ApiEndpointsService} from "./api-endpoints.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private apiEndpointsService: ApiEndpointsService
  ) { }

  async createUserV2(createUserV2Request: CreateUserV2Request): Promise<CreateUserV2Response> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const createUserV2Response: CreateUserV2Response =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateUserV2Response>
        await this.httpClient.post(await this.apiEndpointsService.createUserV2(), createUserV2Request, options).toPromise();
    return createUserV2Response;
  }

  async getUsers(): Promise<GetUsersResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getUsersResponse: GetUsersResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetUsersResponse>
        await this.httpClient.post(await this.apiEndpointsService.getUsers(), {}, options).toPromise();
    return getUsersResponse;
  }

  async getUserByAuthToken(getUserByAuthTokenRequest: GetUserByAuthTokenRequest): Promise<GetUserByAuthTokenResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getUserByAuthTokenResponse: GetUserByAuthTokenResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetUserByAuthTokenResponse>
        await this.httpClient.post(await this.apiEndpointsService.getUserByAuthToken(), getUserByAuthTokenRequest, options).toPromise();
    return getUserByAuthTokenResponse;
  }

  async getAllUsers(): Promise<GetAllUsersResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getAllUsersResponse: GetAllUsersResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetAllUsersResponse>
        await this.httpClient.post(await this.apiEndpointsService.getAllUsers(), {}, options).toPromise();
    return getAllUsersResponse;
  }

  async createUser(createUserRequest: CreateUserRequest): Promise<CreateUserResponse> {
    const options = {headers: DEFAULT_HEADERS};
    const createUserResponse: CreateUserResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateUserResponse>
        await this.httpClient.post(await this.apiEndpointsService.createUser(), createUserRequest, options).toPromise();
    return createUserResponse;
  }

  async getUserByEmailAddress(getUserByEmailAddressRequest: GetUserByEmailAddressRequest):
    Promise<GetUserByEmailAddressResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getUserByEmailAddressResponse: GetUserByEmailAddressResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetUserByEmailAddressResponse>
        await this.httpClient
          .post(await this.apiEndpointsService.getUserByEmailAddress(), getUserByEmailAddressRequest, options)
          .toPromise();
    return getUserByEmailAddressResponse;
  }

}
