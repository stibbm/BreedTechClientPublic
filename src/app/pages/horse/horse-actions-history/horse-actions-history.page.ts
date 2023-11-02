import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ApiEndpointsService } from '../../../services/api-endpoints.service';
import {ActivatedRoute, Router} from '@angular/router';
import { LoaderService } from '../../../services/loader.service';
import {AppointmentV2Displayable} from '../../../model/Appointment';
import {AppointmentActionService} from '../../../services/appointment-action.service';
import {
  AppointmentActionV3, GetAppointmentActionsByAppointmentIdResponse,
  GetAppointmentActionsByHorseIdRequest,
  GetAppointmentActionsByHorseIdResponse
} from '../../../model/AppointmentAction';

@Component({
  selector: 'app-horse-actions-history',
  templateUrl: './horse-actions-history.page.html',
  styleUrls: ['./horse-actions-history.page.scss'],
})
export class HorseActionsHistoryPage implements OnInit {

  columnTitles: string[] = [
    'id',
    'customerFirstAndLastName',
    'description',
    'humanReadableTimestamp',
    'createdByFirstAndLastName',
    'amount',
    'smsMessage'
  ];

  horseAppointmentActionsList: AppointmentActionV3[];
  isHorseAppointmentActionsListLoaded = false;

  horseId: number;

  constructor(
    private authService: AuthService,
    private loaderService: LoaderService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appointmentActionService: AppointmentActionService,
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.activatedRoute.queryParams
      .subscribe(params => {
        //console.log('PARAMSSSs');
        //console.log(params);
        this.horseId = params.horseId;
        //console.log('horseId');
        //console.log(this.horseId);
      });
    await this.loadHorseActionsHistory();
  }

  async loadHorseActionsHistory() {
    await this.loaderService.autoLoader();
    await this.authService.verifyUserLoggedIn();
    console.log('loadHorseActionsHistory');
    const getAppointmentActionsByHorseIdRequest: GetAppointmentActionsByHorseIdRequest = {
      horseId: this.horseId
    };
    const getAppointmentActionsByHorseIdResponse: GetAppointmentActionsByHorseIdResponse =
      await this.appointmentActionService
        .getAppointmentActionsByHorseId(getAppointmentActionsByHorseIdRequest);
    console.log('getAppointmentActionsByHorseIdResponse');
    this.horseAppointmentActionsList = getAppointmentActionsByHorseIdResponse.appointmentActionsList;
    console.log(getAppointmentActionsByHorseIdResponse);
    await this.loaderService.closeLoader();
    this.isHorseAppointmentActionsListLoaded = true;
  }

}
