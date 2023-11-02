import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {GetAllUsersResponse, GetUsersResponse, User} from '../../../model/User';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.scss'],
})
export class UserSelectorComponent implements OnInit {

  @Output() userSelectorEventEmitter = new EventEmitter<User>();

  searchTerm = '';
  usersList: User[] = [];
  user: User;

  isSelectionCompleted = false;

  constructor(
    private userService: UserService
  )
  {}

  async ngOnInit() {
    await this.ionViewDidLoad();
  }

  async ionViewDidLoad() {
    console.log('iovViewDidLoad: UserSelector');
    await this.loadUsersList();
  }

  public async getOwnerUserId(): Promise<number> {
    return this.user.id;
  }

  /*async loadUsersList() {
    console.log('load users list');
    const getAllUsersResponse: GetAllUsersResponse =
      await this.userService.getAllUsers();
    const usersList: User[] = getAllUsersResponse.usersList;
    this.usersList = usersList;
  }*/

  async loadUsersList() {
    console.log('loadUsersList');
    const getUsersResponse: GetUsersResponse = await this.userService.getUsers();
    const usersList: User[] = getUsersResponse.usersList;
    this.usersList = usersList;
  }

  async onUserSelected(user: User) {
    this.user = user;
    this.isSelectionCompleted = true;
    this.userSelectorEventEmitter.emit(user);
  }

  async resetSelector() {
    console.log('reset user selector');
    this.user = null;
    this.searchTerm = null;
    this.isSelectionCompleted = false;
    await this.loadUsersList();
  }

  public async getUser(): Promise<User> {
    return this.user;
  }


}
