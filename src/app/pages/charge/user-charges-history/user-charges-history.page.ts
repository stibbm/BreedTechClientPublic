import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {LoaderService} from '../../../services/loader.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppointmentActionService} from '../../../services/appointment-action.service';
import {
  AppointmentActionV3,
  GetAppointmentActionsByUserIdV2Request,
  GetAppointmentActionsByUserIdV2Response
} from '../../../model/AppointmentAction';

@Component({
  selector: 'app-user-charges-history',
  templateUrl: './user-charges-history.page.html',
  styleUrls: ['./user-charges-history.page.scss'],
})
export class UserChargesHistoryPage implements OnInit {

  columnTitles: string[] = [
    'id',
    'customerFirstAndLastName',
    'description',
    'humanReadableTimestamp',
    'createdByFirstAndLastName',
    'amount',
    'smsMessage'
  ];

  userAppointmentActionsList: AppointmentActionV3[];
  isUserAppointmentActionsListLoaded = false;

  userId: string;

  constructor(
    private authService: AuthService,
    private loaderService: LoaderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appointmentActionService: AppointmentActionService,
  ) { }

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.activatedRoute.queryParams
      .subscribe(params => {
        this.userId = params.userId;
      });
    await this.loadUserAppointmentActionsHistory();
  }

  async loadUserAppointmentActionsHistory() {
    await this.loaderService.autoLoader();
    await this.authService.verifyUserLoggedIn();
    console.log('loadUserAppointmentActionsHistory');
    const getAppointmentActionsByUserIdV2Request: GetAppointmentActionsByUserIdV2Request = {
      userId: this.userId
    };
    console.log('getAppointmentActionsByUserIdRequest: ');
    console.log(getAppointmentActionsByUserIdV2Request);
    const getAppointmentActionsByUserIdV2Response: GetAppointmentActionsByUserIdV2Response =
      await this.appointmentActionService.getAppointmentActionsByUserIdV2(getAppointmentActionsByUserIdV2Request);
    console.log('getAppointmentActionsByUserIdResponse');
    console.log(getAppointmentActionsByUserIdV2Response);
    this.userAppointmentActionsList = getAppointmentActionsByUserIdV2Response.appointmentActionsList;
    this.isUserAppointmentActionsListLoaded = true;
    await this.loaderService.closeLoader();
  }

}
