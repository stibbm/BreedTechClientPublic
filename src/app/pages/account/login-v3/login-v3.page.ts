import { Component, OnInit } from '@angular/core';
import {KeyValueStorageService} from "../../../services/key-value-storage.service";
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {GetUserByAuthTokenRequest, GetUserByAuthTokenResponse, User} from "../../../model/User";
import {AuthToken, LoginRequest, LoginResponse} from "../../../model/Login";
import {AUTH_TOKEN_KEY, USER_LOGGED_IN_EMAIL_ADDRESS_KEY, USER_LOGGED_IN_KEY} from "../../../constants/StorageKeys";

@Component({
  selector: 'app-login-v3',
  templateUrl: './login-v3.page.html',
  styleUrls: ['./login-v3.page.scss'],
})
export class LoginV3Page implements OnInit {

  emailAddress: string;
  password: string;
  userLoggedIn: User;

  constructor(
    private keyValueStorageService: KeyValueStorageService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
  ) { }

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.authService.verifyUserLoggedIn();
  }

  async onLoginButtonPressed() {
    console.log('onLoginButtonPressed');
    const loginRequest: LoginRequest = {
      emailAddress: this.emailAddress,
      password: this.password
    };
    const loginResponse: LoginResponse =
      await this.authService.login(loginRequest);
    if (loginResponse.loginSuccessful === true) {
      const authToken: AuthToken = loginResponse.authToken;
      await this.keyValueStorageService.setItem(AUTH_TOKEN_KEY, authToken);
      const getUserByAuthTokenRequest: GetUserByAuthTokenRequest = {
        authToken: authToken.authToken
      };
      const getUserByAuthTokenResponse: GetUserByAuthTokenResponse =
        await this.userService.getUserByAuthToken(getUserByAuthTokenRequest);
      const user: User = getUserByAuthTokenResponse.user;
      await this.keyValueStorageService.setItem(USER_LOGGED_IN_KEY, user);
      await this.keyValueStorageService.setItem(USER_LOGGED_IN_EMAIL_ADDRESS_KEY, this.emailAddress);
      await this.router.navigate(['/horses']);
    }
  }
}
