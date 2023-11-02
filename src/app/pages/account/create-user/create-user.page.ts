import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {CreateUserV2Request, CreateUserV2Response} from '../../../model/User';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  emailAddress: string;
  firstName: string;
  lastName: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
  }

  async ionViewWillEnter() {

  }

  async onCreateUserButtonPressed() {
    const emailAddress: string = this.emailAddress;
    const firstName: string = this.firstName;
    const lastName: string = this.lastName;
    const createUserV2Request: CreateUserV2Request = {
      emailAddress: emailAddress,
      firstName: firstName,
      lastName: lastName
    };
    const createUserV2Response: CreateUserV2Response = await this.userService
      .createUserV2(createUserV2Request);
    console.log('createUserV2Response');
    console.log(createUserV2Response);
    alert("user: " + createUserV2Response.user.emailAddress + " was successfully created");
    await this.router.navigate(['/users']);
  }

}
