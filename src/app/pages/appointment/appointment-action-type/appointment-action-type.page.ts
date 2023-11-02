import { Component, OnInit } from '@angular/core';
import {AppointmentActionTypeService} from '../../../services/appointment-action-type.service';
import {
  AppointmentActionType,
  AppointmentActionTypeDisplayable,
  GetAppointmentActionTypesByCompanyIdResponse, GetAppointmentActionTypesDisplayableResponse
} from '../../../model/AppointmentActionType';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {LoaderService} from '../../../services/loader.service';

@Component({
  selector: 'app-appointment-action-type',
  templateUrl: './appointment-action-type.page.html',
  styleUrls: ['./appointment-action-type.page.scss'],
})
export class AppointmentActionTypePage implements OnInit {

  appointmentActionTypeDisplayablesList: AppointmentActionTypeDisplayable[];
  appointmentActionTypeDisplayablesListLoaded = false;

  appointmentActionTypesList: AppointmentActionType[];
  appointmentActionTypesListLoaded = false;

  columns = [
    {name: 'Id', prop: 'id'},
    {name: 'Name', prop: 'name'},
    {name: 'Description', prop: 'description'},
    {name: 'Amount', prop: 'amount'}
  ];

  displayColumns = [
    'id',
    'name',
    'description',
    'amount',
  ];

  displayColumnsV2 = [
    'id',
    'name',
    'description',
    'amount',
    'smsMessage'
  ];

  constructor(
    private appointmentActionTypeService: AppointmentActionTypeService,
    private router: Router,
    private authService: AuthService,
    private loaderService: LoaderService
  ) {}

  async ngOnInit() {
    await this.loaderService.autoLoader();
    await this.authService.verifyUserLoggedIn();
    console.log('ngOnInit: ' + 'appointmentActionTypePage');
    await this.ionViewWillEnter();
    await this.loaderService.closeLoader();
  }

  async ionViewWillEnter() {
    await this.loaderService.autoLoader();
    await this.authService.verifyUserLoggedIn();
    console.log('ionViewWillEnter: appointmentActionTypesPage');
    await this.loadAppointmentActionTypes();
    await this.loaderService.closeLoader();
  }

  async loadAppointmentActionTypes() {
    console.log('loadAppointmentActionTypes');
    const getAppointmentActionTypesDisplayableResponses: GetAppointmentActionTypesDisplayableResponse =
      await this.appointmentActionTypeService.getAppointmentActionTypeDisplayables();
    this.appointmentActionTypeDisplayablesList = getAppointmentActionTypesDisplayableResponses
      .appointmentActionTypeDisplayablesList;
    this.appointmentActionTypeDisplayablesListLoaded = true;
    console.log(this.appointmentActionTypeDisplayablesList);
  }

  async onCreateAppointmentActionTypeButtonPressed() {
    console.log('onCreateAppointmentActionTypeButtonPressed');
    await this.router.navigate(['create-appointment-action-type']);
  }
}
