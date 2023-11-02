import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthToken, LoginRequest, LoginResponse} from '../model/Login';
import {DEFAULT_HEADERS} from '../constants/constants';
import {LOGIN_URL} from '../constants/routes';
import {KeyValueStorageService} from './key-value-storage.service';
import {AUTH_TOKEN_KEY, USER_LOGGED_IN_EMAIL_ADDRESS_KEY} from '../constants/StorageKeys';
import {Options} from '../model/Options';
import {Router} from '@angular/router';
import {ApiEndpointsService} from "./api-endpoints.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private keyValueStorageService: KeyValueStorageService,
    private router: Router,
    private apiEndpointsService: ApiEndpointsService,
  ) {}

  async login(loginRequest: LoginRequest): Promise<LoginResponse> {
    const options = {
      headers: DEFAULT_HEADERS
    };
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const loginResponse: LoginResponse = <LoginResponse>await this.httpClient.post(
      await this.apiEndpointsService.getLogin(), loginRequest, options).toPromise();
    //console.log('loginResponse:');
    //console.log(loginResponse);
    return loginResponse;
  }

  async verifyUserLoggedIn() {
    if (await this.isUserLoggedIn() === false) {
      await this.router.navigate(['/login']);
    }
  }

  async isUserLoggedIn(): Promise<boolean> {
    try {
      const authToken: string = await this.keyValueStorageService
        .getItem(AUTH_TOKEN_KEY);
      const userLoggedInEmailAddress: string = await this.keyValueStorageService
        .getItem(USER_LOGGED_IN_EMAIL_ADDRESS_KEY);
      console.log('authToken: ');
      console.log(authToken);
      console.log('userLoggedInEmailAddress');
      console.log(userLoggedInEmailAddress);

      if (authToken!=null && userLoggedInEmailAddress!=null) {
        return true;
      }
      else {
        return false;
      }
    } catch (e) {
     return false;
    }
  }

  async getCurrentAuthToken(): Promise<string> {
    const authTokenObject: AuthToken = await this.keyValueStorageService.getItem(AUTH_TOKEN_KEY);
    const authToken: string = authTokenObject.authToken;
    //console.log('authToken: ' + authToken);
    return authToken;
  }

  async getAuthenticatedHeaders(): Promise<any> {
    const currentAuthToken: string = await this.getCurrentAuthToken();
    const headers = {
      'content-type': 'application/json',
      authToken: currentAuthToken
    };
    return headers;
  }

  async getAuthenticatedHeadersWrappedInOptionsAsync(): Promise<Options> {
    const authenticatedHeaders = await this.getAuthenticatedHeaders();
    const options: Options = {
      headers: authenticatedHeaders
    };
    return options;
  }

}
