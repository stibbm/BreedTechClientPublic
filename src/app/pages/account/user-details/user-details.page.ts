import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {User} from '../../../model/User';
import {
  AppointmentV2,
  AppointmentV2Displayable, GetAppointmentAmountDueRequest, GetAppointmentAmountDueResponse,
  GetAppointmentsByUserIdRequest,
  GetAppointmentsByUserIdResponse, GetAppointmentV2ByIdRequest, GetAppointmentV2ByIdResponse
} from '../../../model/Appointment';
import {AppointmentService} from '../../../services/appointments.service';
import {AppointmentAdapterService} from '../../../services/appointment-adapter.service';
import {AppointmentWithCostSummary} from '../../../model/AppointmentWithCostSummary';
import {convertToAppointmentWithCostSummary} from '../../../adapter/AppointmentWithCostSummaryAdapter';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  user: User;
  isUserLoaded = false;

  appointmentV2DisplayablesList: AppointmentV2Displayable[] = [];

  appointmentV2sList: AppointmentV2[] = [];
  isAppointmentV2sListLoaded = false;

  isAppointmentV2DisplayablesListLoaded = false;

  getAppointmentAmountDueResponsesList: GetAppointmentAmountDueResponse[] = [];
  isGetAppointmentAmountDueResponsesListLoaded = false;

  appointmentWithCostSummarysList: AppointmentWithCostSummary[] = [];
  isAppointmentWithCostSummarysListLoaded = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private appointmentService: AppointmentService,
    private appointmentAdapterService: AppointmentAdapterService,
    private router: Router,
  ) {}

  async ngOnInit() {
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.authService.verifyUserLoggedIn();
    this.isUserLoaded = false;
    this.isAppointmentWithCostSummarysListLoaded = false;
    this.isAppointmentV2DisplayablesListLoaded = false;
    await this.activatedRoute.queryParams
      .subscribe(params => {
        const user: User = JSON.parse(params.userJSON);
        this.user = user;
        this.isUserLoaded = true;
      });
    await this.loadAppointmentV2DisplayablesList(this.user);
  }

  async loadAppointmentV2DisplayablesList(user: User) {
    this.isAppointmentV2DisplayablesListLoaded = false;
    this.isAppointmentWithCostSummarysListLoaded = false;
    const appointmentWithCostSummarysList: AppointmentWithCostSummary[] = [];
    //this.appointmentWithCostSummarysList = appointmentWithCostSummarysList;
    const userId: number = user.id;
    const getAppointmentsByUserIdRequest: GetAppointmentsByUserIdRequest = {
      userId
    };
    const getAppointmentsByUserIdResponse: GetAppointmentsByUserIdResponse =
      await this.appointmentService.getAppointmentsByUserId(getAppointmentsByUserIdRequest);
    console.log(getAppointmentsByUserIdResponse);
    const appointmentsLists: AppointmentV2[] = getAppointmentsByUserIdResponse.appointmentsList;
    this.appointmentV2sList = appointmentsLists;
    console.log(appointmentsLists);
    const appointmentV2DisplayablesList: AppointmentV2Displayable[] =
      this.appointmentAdapterService.adaptListToAppointmentV2Displayable(appointmentsLists);
    console.log('appointmentV2DisplayablesList:');
    console.log(appointmentV2DisplayablesList);
    //this.appointmentWithCostSummarysList = [];

    for (var i=0;i<appointmentV2DisplayablesList.length;i++) {
      const appointmentV2Displayable: AppointmentV2Displayable = appointmentV2DisplayablesList[i];
      const getAppointmentAmountDueRequest: GetAppointmentAmountDueRequest = {
        appointmentId: appointmentV2Displayable.id
      };
      const getAppointmentAmountDueResponse: GetAppointmentAmountDueResponse =
        await this.appointmentService.getAppointmentAmountDue(getAppointmentAmountDueRequest);
      const appointmentWithCostSummary: AppointmentWithCostSummary =
        convertToAppointmentWithCostSummary(appointmentV2Displayable, getAppointmentAmountDueResponse);
      appointmentWithCostSummarysList.push(appointmentWithCostSummary);
    }
    this.appointmentV2DisplayablesList = appointmentV2DisplayablesList;
    this.appointmentWithCostSummarysList = appointmentWithCostSummarysList;
    this.isAppointmentV2DisplayablesListLoaded = true;
    this.isAppointmentWithCostSummarysListLoaded = true;

  }

  async goToAppointmentDetailsPage(appointmentV2Displayable: AppointmentV2Displayable) {
    console.log('goToAppointmentDetailsPage');
    const getAppointmentV2ByIdRequest: GetAppointmentV2ByIdRequest = {
      id: appointmentV2Displayable.id
    };
    const getAppointmentV2ByIdResponse: GetAppointmentV2ByIdResponse = await this.appointmentService
      .getAppointmentV2ById(getAppointmentV2ByIdRequest);
    const appointmentV2: AppointmentV2 = getAppointmentV2ByIdResponse.appointmentV2;
    const appointmentV2JSON: string = JSON.stringify(appointmentV2);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentV2JSON
      }
    };
    await this.router.navigate(['/appointment-details'], navigationExtras);
  }

  async loadGetAppointmentAmountDueResponsesList() {
    this.isGetAppointmentAmountDueResponsesListLoaded = false;
    const getAppointmentAmountDueResponsesList: GetAppointmentAmountDueResponse[] =
      await this.getGetAppointmentAmountDueResponsesList();
    this.getAppointmentAmountDueResponsesList = getAppointmentAmountDueResponsesList;
    this.isGetAppointmentAmountDueResponsesListLoaded = true;
  }

  async getGetAppointmentAmountDueResponsesList():
    Promise<GetAppointmentAmountDueResponse[]>
  {
    const getAppointmentAmountDueResponsesList: GetAppointmentAmountDueResponse[] = [];
    for (var i=0;i<this.appointmentV2sList.length;i++) {
      const appointmentV2: AppointmentV2 = this.appointmentV2sList[i];
      const appointmentId: number = appointmentV2.id;
      const getAppointmentAmountDueRequest: GetAppointmentAmountDueRequest = {
        appointmentId
      };
      const getAppointmentAmountDueResponse: GetAppointmentAmountDueResponse =
        await this.appointmentService.getAppointmentAmountDue(getAppointmentAmountDueRequest);
      getAppointmentAmountDueResponsesList.push(getAppointmentAmountDueResponse);
    }
    return getAppointmentAmountDueResponsesList;
  }

  async goToAppointmentDetailsUsingAppointmentWithCostSummaryPage(appointmentWithCostSummary: AppointmentWithCostSummary) {
    const getAppointmentV2ByIdRequest: GetAppointmentV2ByIdRequest = {
      id: appointmentWithCostSummary.id
    };
    const getAppointmentV2ByIdResponse: GetAppointmentV2ByIdResponse =
      await this.appointmentService.getAppointmentV2ById(getAppointmentV2ByIdRequest);
    const appointmentV2: AppointmentV2 = getAppointmentV2ByIdResponse.appointmentV2;
    const appointmentV2Displayable: AppointmentV2Displayable =
      this.appointmentAdapterService.adaptToAppointmentV2Displayable(appointmentV2);
    await this.goToAppointmentDetailsPage(appointmentV2Displayable);
  }
}
