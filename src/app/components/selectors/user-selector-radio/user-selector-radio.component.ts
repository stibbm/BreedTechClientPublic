import { Component, OnInit } from '@angular/core';
import {GetAllUsersResponse, GetUsersResponse, User} from 'src/app/model/User';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-selector-radio',
  templateUrl: './user-selector-radio.component.html',
  styleUrls: ['./user-selector-radio.component.scss'],
})
export class UserSelectorRadioComponent implements OnInit {

  usersList: User[] = [];
  isUsersListLoaded = false;
  user: User;

  constructor(
    private userService: UserService
  ) { }

  async ngOnInit() {
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
    const getUsersResponse: GetUsersResponse =
      await this.userService.getUsers();
    const usersList: User[] = getUsersResponse.usersList;
    return usersList;
  }

  /*async getUsers(): Promise<User[]> {
    const getAllUsersResponse: GetAllUsersResponse =
      await this.userService.getAllUsers();
    const usersList: User[] = getAllUsersResponse.usersList;
    return usersList;
  }*/

}
