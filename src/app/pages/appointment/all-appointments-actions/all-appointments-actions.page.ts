import { Component, OnInit } from '@angular/core';
import {AppointmentActionService} from '../../../services/appointment-action.service';
import {
  AppointmentAction,
  AppointmentActionV3, GetAppointmentActionsByAppointmentIdV2Request,
  GetAppointmentActionsByAppointmentIdV2Response,
  GetAppointmentActionsResponse, GetAppointmentActionsV3Response
} from '../../../model/AppointmentAction';
import {LoaderService} from '../../../services/loader.service';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-all-appointments-actions',
  templateUrl: './all-appointments-actions.page.html',
  styleUrls: ['./all-appointments-actions.page.scss'],
})
export class AllAppointmentsActionsPage implements OnInit {

  appointmentActionsList: AppointmentAction[] = [];
  isAppointmentActionsListLoaded = false;

  appointmentActionsV3List: AppointmentActionV3[];
  appointmentActionsV3ListLoaded = false;


  displayColumns: string[] =
    [
      'id',
      'appointmentId',
      'description',
      'smsMessage',
      'timestamp',
      'createdByUserId'
    ];

  displayColumnsV2: string[] =
    [
      'id',
      'customerFirstAndLastName',
      'description',
      'humanReadableTimestamp',
      'createdByUserFirstAndLastName',
      'amount',
      'smsMessage'
    ];

  constructor(
    private appointmentActionsService: AppointmentActionService,
    private loaderService: LoaderService,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.loaderService.autoLoader();
    const getAppointmentActionsV3Response: GetAppointmentActionsV3Response =
      await this.appointmentActionsService.getAppointmentActionsV3();
    console.log('getAppointmentActionsV3Response');
    console.log(getAppointmentActionsV3Response);
    console.log('done');

    this.appointmentActionsV3List = getAppointmentActionsV3Response.appointmentActionsList;
    this.appointmentActionsV3ListLoaded = true;

    console.log('ionViewWillEnter: AllAppointmentActionsPage');
    const getAppointmentActionsResponse: GetAppointmentActionsResponse =
      await this.appointmentActionsService.getAppointmentActions();
    console.log('getAppointmentActionsResponse');
    console.log(getAppointmentActionsResponse);
    this.appointmentActionsList = getAppointmentActionsResponse.appointmentActionsList;
    console.log('appointmentActionsList: ' + this.appointmentActionsList);
    this.isAppointmentActionsListLoaded = true;
    await this.loaderService.closeLoader();
  }

}
