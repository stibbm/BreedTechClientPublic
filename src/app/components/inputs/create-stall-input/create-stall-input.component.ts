import {Component, OnInit, ViewChild} from '@angular/core';
import {UserSelectorComponent} from "../../selectors/user-selector/user-selector.component";
import {User} from "../../../model/User";

@Component({
  selector: 'app-create-stall-input',
  templateUrl: './create-stall-input.component.html',
  styleUrls: ['./create-stall-input.component.scss'],
})
export class CreateStallInputComponent implements OnInit {

  @ViewChild(UserSelectorComponent, {static: false}) userSelectorComponent;

  stallName: string;
  description: string;
  capacity: number;
  notes: string;
  userId: number;

  constructor() { }

  ngOnInit() {}

  reset() {
    this.stallName = null;
    this.description = null;
    this.capacity = null;
    this.notes = null;
    this.userId = null;
  }

  getStallName() {
    return this.stallName;
  }

  getDescription() {
    return this.description;
  }

  getCapacity() {
    return this.capacity;
  }

  getNotes() {
    return this.notes;
  }

  async getUserId() {
    //return this.userId;
    const user: User = await this.userSelectorComponent.getUser();
    const userId: number = user.id;
    return userId;
  }




}
