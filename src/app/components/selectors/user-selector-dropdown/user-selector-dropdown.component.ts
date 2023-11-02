import { Component, OnInit } from '@angular/core';
import {GetAllUsersResponse, User} from '../../../model/User';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-selector-dropdown',
  templateUrl: './user-selector-dropdown.component.html',
  styleUrls: ['./user-selector-dropdown.component.scss'],
})
export class UserSelectorDropdownComponent implements OnInit {

  usersList: User[] = [];
  isUsersListLoaded = false;

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
    console.log(usersList);
    this.usersList = usersList;
    this.isUsersListLoaded = true;
  }

  async getUsers(): Promise<User[]> {
    const getAllUsersResponse: GetAllUsersResponse = await this.userService.getAllUsers();
    const usersList: User[] = getAllUsersResponse.usersList;
    return usersList;
  }

}
