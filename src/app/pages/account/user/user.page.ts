import { Component, OnInit } from '@angular/core';
import {GetUsersResponse, User} from '../../../model/User';
import {UserService} from '../../../services/user.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  filterByFirstName: string;
  filterByLastName: string;
  filterByEmailAddress: string;

  usersList: User[];

  displayColumns = [
    'firstName',
    'lastName',
    'emailAddress',
    'actions'
  ];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  async ngOnInit() {
    console.log('ngOnInit');
    await this.loadUsers();
  }

  async ionViewWillEnter() {
    console.log('ionViewWillEnter');
    await this.loadUsers();
  }

  async loadUsers() {
    console.log('loadUsers');
    const getUsersResponse: GetUsersResponse = await this.userService.getUsers();
    this.usersList = getUsersResponse.usersList;
    console.log('users: ');
    console.log(getUsersResponse);
    console.log(this.usersList);
  }

  async onApplyFilterButtonPressed() {
    console.log('onApplyFilterButtonPressed');

  }

  async onCreateUserButtonPressed() {
    console.log('onCreateButtonPressed');
    await this.router.navigate(['create-user']);
  }

  async onViewChargesHistoryButtonPressed(user: User) {
    console.log('user');
    console.log(user);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        userId: user.id
      }
    };
    await this.router.navigate(['/user-charges-history'], navigationExtras);
  }

}
