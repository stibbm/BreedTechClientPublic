import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {
  AppointmentV2,
  AppointmentV2Displayable,
  GetActiveAppointmentsByHorseIdResponse, GetAppointmentV2ByIdRequest, GetAppointmentV2ByIdResponse
} from '../../../model/Appointment';
import {
  AppointmentAction, AppointmentActionV3,
  GetAppointmentActionsByAppointmentIdRequest,
  GetAppointmentActionsByAppointmentIdResponse,
  GetAppointmentActionsByAppointmentIdV2Request,
  GetAppointmentActionsByAppointmentIdV2Response
} from '../../../model/AppointmentAction';
import {AppointmentActionService} from '../../../services/appointment-action.service';
import {LoaderService} from '../../../services/loader.service';
import {AuthService} from '../../../services/auth.service';
import {AppointmentService} from '../../../services/appointments.service';


@Component({
  selector: 'app-appointment-action',
  templateUrl: './appointment-action.page.html',
  styleUrls: ['./appointment-action.page.scss'],
})
export class AppointmentActionPage implements OnInit {

  appointmentId: number;
  appointmentV2Displayable: AppointmentV2Displayable;
  appointmentActionsList: AppointmentAction[];

  appointmentActionsV3List: AppointmentActionV3[];
  appointmentActionsV3ListLoaded = false;

  columns = [
    {name: 'Id', prop: 'id'},
    {name: 'AppointmentId', prop: 'appointmentId'},
    {name: 'Description', prop: 'description'},
    {name: 'Timestamp', prop: 'timestamp'},
    {name: 'CreatedByUserId', prop: 'createdByUserId'}
  ];

  displayColumns = [
    'id',
    'appointmentId',
    'description',
    'timestamp',
    'createdByUserId'
  ];

  displayColumnsV2 = [
    'id',
    'customerFirstAndLastName',
    'description',
    'humanReadableTimestamp',
    'createdByUserFirstAndLastName',
    'amount',
    'smsMessage'
  ];

  isAppointmentActionsListLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private appointmentActionService: AppointmentActionService,
    private appointmentService: AppointmentService,
    private loaderService: LoaderService,
    private authService: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.loaderService.autoLoader();
    await this.authService.verifyUserLoggedIn();
    //await this.loaderService.simpleLoader();
    console.log('AppointmentActionPage ngOnInit');
    await this.activatedRoute.queryParams
      .subscribe(params => {
        console.log('PARAMS');
        console.log(params);
        this.appointmentId = params.appointmentId;
        this.appointmentV2Displayable = JSON.parse(params.appointmentJSON);
      });
    console.log(this.appointmentV2Displayable);
    const getAppointmentActionsByAppointmentIdRequest: GetAppointmentActionsByAppointmentIdRequest = {
      appointmentId: this.appointmentId
    };
    const getAppointmentActionsByAppointmentIdResponse: GetAppointmentActionsByAppointmentIdResponse = await this.appointmentActionService
      .getAppointmentActionsByAppointmentId(getAppointmentActionsByAppointmentIdRequest);
    console.log('getAppointmentActionsByAppointmentIdResponse');
    console.log(getAppointmentActionsByAppointmentIdResponse);
    const appointmentActionsList: AppointmentAction[] = getAppointmentActionsByAppointmentIdResponse
      .appointmentActionsList;
    console.log('appointmentActionsList');
    console.log(appointmentActionsList);
    this.appointmentActionsList = appointmentActionsList;
    this.isAppointmentActionsListLoaded = true;
    console.log(this.appointmentActionsList);
    console.log('appointmentV2Displayable is above');
    //await this.loaderService.closeLoader();

    const getAppointmentActionsByAppointmentIdV2Request: GetAppointmentActionsByAppointmentIdV2Request = {
      appointmentId: this.appointmentId
    };

    const getAppointmentActionsByAppointmentIdV2Response: GetAppointmentActionsByAppointmentIdV2Response =
      await this.appointmentActionService
        .getAppointmentActionsByAppointmentIdV2(getAppointmentActionsByAppointmentIdV2Request);

    console.log('getAppointmentActionsByAppointmentIdV2: ' + getAppointmentActionsByAppointmentIdV2Response);

    const appointmentActionsV3List: AppointmentActionV3[] = getAppointmentActionsByAppointmentIdV2Response
      .appointmentActionsList;
    this.appointmentActionsV3List = appointmentActionsV3List;
    this.appointmentActionsV3ListLoaded = true;
    await this.loaderService.closeLoader();
  }

  async checkInAppointment(appointmentId: number) {
    //this.appointmentServi
  }

  async completeAppointment(appointmentId: number) {

  }

  async onCreateAppointmentActionButtonPressed() {
    console.log("ON CREATE APPOINTMENT ACTION BUTTON PRESSED");
    console.log('onCreateAppointmentActionButtonPressed!');
    const appointmentId: number = this.appointmentV2Displayable.id;
    const appointmentIdString: string = '' + appointmentId;
    const getAppointmentV2ByIdRequest: GetAppointmentV2ByIdRequest = {
      id: appointmentId
    };
    const getAppointmentV2ByIdResponse: GetAppointmentV2ByIdResponse =
      await this.appointmentService.getAppointmentV2ById(getAppointmentV2ByIdRequest);
    const appointmentV2: AppointmentV2 = getAppointmentV2ByIdResponse.appointmentV2;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentId: appointmentIdString,
        appointmentV2JSON: JSON.stringify(appointmentV2)
      }
    };
    await this.router.navigate(['create-appointment-action']);
  }
}
