import { Component, OnInit } from '@angular/core';
import {KeyValueStorageService} from '../../../services/key-value-storage.service';
import {AuthService} from '../../../services/auth.service';
import {AuthToken, LoginRequest, LoginResponse} from '../../../model/Login';
import {AUTH_TOKEN_KEY, USER_LOGGED_IN_EMAIL_ADDRESS_KEY, USER_LOGGED_IN_KEY} from '../../../constants/StorageKeys';
import {Router} from '@angular/router';
import {GetUserByAuthTokenRequest, GetUserByAuthTokenResponse, User} from '../../../model/User';
import {UserService} from '../../../services/user.service';
import {LoaderService} from '../../../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailAddress: string;
  password: string;
  userLoggedIn: User;

  constructor(
    private keyValueStorageService: KeyValueStorageService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private loaderService: LoaderService,
  ) {}

  async ngOnInit() {}

  async onLoginButtonPressed() {
    try {
      await this.loaderService.autoLoader();
      const loginRequest: LoginRequest = {
        emailAddress: this.emailAddress,
        password: this.password
      };
      const loginResponse: LoginResponse = await this.authService.login(loginRequest);
      await this.loaderService.closeLoader();
      if (loginResponse.loginSuccessful === true) {
        const authToken: AuthToken = loginResponse.authToken;
        await this.keyValueStorageService.setItem(AUTH_TOKEN_KEY, authToken);
        const getUserByAuthTokenRequest: GetUserByAuthTokenRequest = {
          'authToken': authToken.authToken
        };
        const getUserByAuthTokenResponse: GetUserByAuthTokenResponse =
          await this.userService.getUserByAuthToken(getUserByAuthTokenRequest);
        const user: User = getUserByAuthTokenResponse.user;
        await this.keyValueStorageService.setItem(USER_LOGGED_IN_KEY, user);
        await this.keyValueStorageService.setItem(USER_LOGGED_IN_EMAIL_ADDRESS_KEY, this.emailAddress);
        const testAuthToken: AuthToken = await this.keyValueStorageService.getItem(AUTH_TOKEN_KEY);
        await this.loaderService.closeLoader();
        await this.router.navigate(['/horses']);
      } else {
        await this.loaderService.closeLoader();
        alert('Email or password is incorrect');
      }
    } catch (exception) {
      console.log('error logging in');
      console.log(exception);
      alert('Email or password is incorrect');
    }
  }

}
