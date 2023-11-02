import { Component, OnInit } from '@angular/core';
import {AppointmentActionTypeService} from '../../../services/appointment-action-type.service';
import {AppointmentActionService} from '../../../services/appointment-action.service';
import {
  AppointmentActionType,
  AppointmentActionTypeDisplayable,
  GetAppointmentActionTypesDisplayableResponse
} from '../../../model/AppointmentActionType';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-appointment-action-types',
  templateUrl: './appointment-action-types.page.html',
  styleUrls: ['./appointment-action-types.page.scss'],
})
export class AppointmentActionTypesPage implements OnInit {

  appointmentActionTypeDisplayablesList: AppointmentActionTypeDisplayable[];

  constructor(
    private appointmentActionTypeService: AppointmentActionTypeService,
    private appointmentActionService: AppointmentActionService,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.authService.verifyUserLoggedIn();
    await this.loadAppointmentActionTypes();
  }

  async loadAppointmentActionTypes() {
    const appointmentActionTypeDisplayablesList: AppointmentActionTypeDisplayable[] =
      await this.getAppointmentActionTypes();
    this.appointmentActionTypeDisplayablesList = appointmentActionTypeDisplayablesList;
  }

  async getAppointmentActionTypes():
    Promise<AppointmentActionTypeDisplayable[]>
  {
    const getAppointmentActionTypeDisplayableResponse: GetAppointmentActionTypesDisplayableResponse =
      await this.appointmentActionTypeService.getAppointmentActionTypeDisplayables();
    const appointmentActionTypeDisplayablesList: AppointmentActionTypeDisplayable[] =
      getAppointmentActionTypeDisplayableResponse.appointmentActionTypeDisplayablesList;
    return appointmentActionTypeDisplayablesList;
  }

  async goToAppointmentActionTypePage(appointmentActionTypeDisplayable: AppointmentActionTypeDisplayable)
  {
    console.log('goToAppointmentActionTypePage');
  }

  async goToCreateAppointmentActionTypePage()
  {
    console.log('goToCreateAppointmentActionTypePage');
    await this.router.navigate(['create-appointment-action-type']);
  }
}
