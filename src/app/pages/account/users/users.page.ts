import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {GetUsersResponse, User} from '../../../model/User';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  usersList: User[];
  isUsersListLoaded = false;

  constructor(
    private usersService: UserService,
    private authService: AuthService,
    private router: Router,
  ) { }

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.loadUsers();
  }

  async loadUsers() {
    this.isUsersListLoaded = false;
    const usersList: User[] = await this.getUsers();
    this.usersList = usersList;
    this.isUsersListLoaded = true;
  }

  async getUsers(): Promise<User[]> {
    const getUsersResponse: GetUsersResponse = await this.usersService.getUsers();
    const usersList: User[] = getUsersResponse.usersList;
    return usersList;
  }


  async goCreateUserPage() {
    await this.router.navigate(['create-user']);
  }

  async goToUserDetailsPage(user: User) {
    console.log('goToUserDetailsPage');
    const navigationExtras: NavigationExtras = {
      queryParams: {
        userJSON: JSON.stringify(user)
      }
    };
    await this.router.navigate(['/user-details'], navigationExtras);
  }
}
