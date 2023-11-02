import {Component, OnInit, ViewChild} from '@angular/core';
import { Horse } from '../../../model/Horse';
import { User } from '../../../model/User';
import {Stall, StallOccupancy} from '../../../model/Stall';
import {HorseService} from '../../../services/horses.service';
import {StallService} from '../../../services/stalls.service';
import {HorseLocationService} from '../../../services/horse-location.service';
import {HorseSelectorComponent} from '../../../components/selectors/horse-selector/horse-selector.component';
import {UserService} from '../../../services/user.service';
import {StallSelectorComponent} from '../../../components/selectors/stall-selector/stall-selector.component';
import {
  CreateHorseLocationRequest,
  CreateHorseLocationResponse,
  MoveHorseRequest,
  MoveHorseResponse
} from '../../../model/HorseLocation';
import {LoaderService} from '../../../services/loader.service';
import { Router } from '@angular/router';
import {
  HorseSelectorByActiveAppointmentComponent
} from '../../../components/inputs/horse-selector-by-active-appointment/horse-selector-by-active-appointment.component';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-move-horse',
  templateUrl: './move-horse.page.html',
  styleUrls: ['./move-horse.page.scss'],
})
export class MoveHorsePage implements OnInit {

  //@ViewChild(HorseSelectorComponent, {static: false}) horseSelectorComponent: HorseSelectorComponent;
  @ViewChild(StallSelectorComponent, {static: false}) stallSelectorComponent: StallSelectorComponent;
  @ViewChild(HorseSelectorByActiveAppointmentComponent, {static: false})
    horseSelectorByActiveAppointmentComponent: HorseSelectorByActiveAppointmentComponent;

  searchTerm: string;
  user: User;
  horse: Horse;
  emailAddress: string;

  isUserChosen = false;
  isHorseChosen = false;

  horsesList: Horse[];
  stallsList: Stall[];

  chosenStall: Stall;
  chosenHorse: Horse;

  constructor(
    private userService: UserService,
    private horseService: HorseService,
    private horseLocationService: HorseLocationService,
    private stallService: StallService,
    private loaderService: LoaderService,
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    await this.resetFields();
    await this.authService.verifyUserLoggedIn();
  }

  async ionViewWillEnter() {
    await this.resetFields();
  }

  async onMoveHorseButtonPressed() {
    try {
      await this.loaderService.autoLoader();
      //const horse: Horse = await this.horseSelectorByActiveAppointmentComponent.getHorse();
      const moveHorseRequest: MoveHorseRequest = {
        horseId: await this.horseSelectorByActiveAppointmentComponent.getHorseV2Id(),
        destinationStallId: this.stallSelectorComponent.stallOccupancy.stallId
      };
      const moveHorseResponse: MoveHorseResponse =
        await this.horseLocationService.moveHorse(moveHorseRequest);
      console.log('moveHorseResponse: ');
      console.log(moveHorseResponse);
      await this.loaderService.closeLoader();
      //alert('successfully moved horse');
      await this.router.navigate(['horses']);
    } catch (e) {
      //alert(e.error);
      console.log(e);
      alert('failed to move horse');
    }
    await this.resetFields();
  }

  async resetFields() {
    this.horse = undefined;
    this.chosenStall = undefined;
    this.user=undefined;
    this.isHorseChosen = false;
    this.isUserChosen = false;
  }

  /*async onMoveHorseButtonPressed() {
    await this.loaderService.simpleLoader();
    const horse: Horse = await this.horseSelectorComponent.horse;
    const stallOccupancy: StallOccupancy = await this.stallSelectorComponent.stallOccupancy;
    const createHorseLocationRequest: CreateHorseLocationRequest = {
      horseId: horse.id,
      stallId: stallOccupancy.stallId,
    };
    const createHorseLocationResponse: CreateHorseLocationResponse =
      await this.horseLocationService.createHorseLocation(createHorseLocationRequest);
    console.log('createHorseLocationResponse:');
    console.log(createHorseLocationResponse);
    await this.loaderService.closeLoader();
    // might need to change this to have it route based on what page that it came from
    await this.router.navigate(['horses']);
  }*/

}
