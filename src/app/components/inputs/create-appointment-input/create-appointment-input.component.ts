import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../../../model/User';
import {UserSelectorComponent} from '../../selectors/user-selector/user-selector.component';
import {HorseSelectorByUserIdComponent} from '../../selectors/horse-selector-by-user-id/horse-selector-by-user-id.component';
import {Horse, HorseV2} from '../../../model/Horse';
import {UserSelectorRadioComponent} from "../../selectors/user-selector-radio/user-selector-radio.component";
import {HorseSelectorComponent} from "../../selectors/horse-selector/horse-selector.component";
import {HorseSelectorRadioComponent} from "../../selectors/horse-selector-radio/horse-selector-radio.component";

@Component({
  selector: 'app-create-appointment-input',
  templateUrl: './create-appointment-input.component.html',
  styleUrls: ['./create-appointment-input.component.scss'],
})
export class CreateAppointmentInputComponent implements OnInit {

  @ViewChild(UserSelectorComponent, {static: false}) userSelectorComponent:
    UserSelectorComponent;
  @ViewChild(HorseSelectorByUserIdComponent, {static: false}) horseSelectorByUserIdComponent:
    HorseSelectorByUserIdComponent;

  @ViewChild(UserSelectorRadioComponent, {static: false}) userSelectorRadioComponent;
  @ViewChild(HorseSelectorComponent, {static: false}) horseSelectorComponent: HorseSelectorComponent;
  @ViewChild(HorseSelectorRadioComponent, {static: false}) horseSelectorRadioComponent: HorseSelectorRadioComponent;

  appointmentReason: string;
  notificationsPhoneNumber: string;

  constructor() {

  }

  async ngOnInit() {

  }

  getSelectedUser() {
    // if user has been selected then return it
    /*if (this.userSelectorComponent.isSelectionCompleted===true) {
      //const user: User = this.userSelectorComponent.user;
      const user: User = this.userSelectorRadioComponent.user;
      return user;
    }
    console.log('USER SELECTION HAS NOT BEEN MADE YET');
    return null;*/
    const user: User = this.userSelectorRadioComponent.user;
    return user;
  }

  async getSelectedHorse() {
    //const horse: Horse = await this.horseSelectorComponent.getHorse();
    //const horse: Horse = await this.horseSelectorRadioComponent.getHorse();
    // if the horse has been selected then return it
    /*if (this.horseSelectorByUserIdComponent.isSelectionCompleted === true) {
      const horse: Horse = this.horseSelectorByUserIdComponent.horse;
      return horse;
    }
    console.log('HORSE SELECTION HAS NOT BEEN MADE YET');
    return null;*/
    const horse: HorseV2 = await this.horseSelectorRadioComponent.getHorseV2();
    return horse;
  }

  public getSelectedPhoneNumber() {
    return this.notificationsPhoneNumber;
  }

  public getSelectedReason() {
    return this.appointmentReason;
  }

  async userSelectorEventEmitted(user: User) {
    this.horseSelectorByUserIdComponent.user = user;
    await this.horseSelectorByUserIdComponent.loadHorsesList();
  }

}
