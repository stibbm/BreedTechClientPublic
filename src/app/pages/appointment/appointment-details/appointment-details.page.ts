import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {
  Appointment,
  AppointmentV2,
  AppointmentV2Displayable,
  CHECKED_IN,
  COMPLETE,
  GetAppointmentAmountDueRequest,
  GetAppointmentAmountDueResponse,
  GetAppointmentV2ByIdRequest, GetAppointmentV2ByIdResponse,
  UpdateAppointmentStatusRequest,
  UpdateAppointmentStatusResponse
} from '../../../model/Appointment';
import {
  AppointmentActionV3,
  GetAppointmentActionsByAppointmentIdV2Request,
  GetAppointmentActionsByAppointmentIdV2Response
} from '../../../model/AppointmentAction';
import {AppointmentActionService} from '../../../services/appointment-action.service';
import {AppointmentService} from '../../../services/appointments.service';
import {AppointmentAdapterService} from '../../../services/appointment-adapter.service';
import {AuthService} from '../../../services/auth.service';
import {AppointmentServiceWrapperService} from '../../../wrapper/appointment-service-wrapper.service';
import { AppointmentActionServiceWrapperService } from 'src/app/wrapper/appointment-action-service-wrapper.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.page.html',
  styleUrls: ['./appointment-details.page.scss'],
})
export class AppointmentDetailsPage implements OnInit {

  appointmentV2: AppointmentV2;
  isAppointmentV2Loaded = false;

  appointmentActionsV3List: AppointmentActionV3[];
  isAppointmentActionsV3ListLoaded = false;

  getAppointmentAmountDueResponse: GetAppointmentAmountDueResponse;
  isGetAppointmentAmountDueResponseLoaded = false;

  appointmentV2Displayable: AppointmentV2Displayable;
  isAppointmentV2DisplayableLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private appointmentActionsService: AppointmentActionService,
    private appointmentActionsServiceWrapperService: AppointmentActionServiceWrapperService,
    private appointmentService: AppointmentService,
    private appointmentAdapterService: AppointmentAdapterService,
    private authService: AuthService,
    private appointmentServiceWrapperService: AppointmentServiceWrapperService,
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.loadAppointmentQueryParam();
  }

  async loadAppointmentQueryParam() {
    this.isAppointmentV2Loaded = false;
    await this.activatedRoute.queryParams
      .subscribe(params => {
        const appointmentV2JSON = params.appointmentV2JSON;
        const appointmentV2: AppointmentV2 = JSON.parse(appointmentV2JSON);
        this.appointmentV2 = appointmentV2;
        this.isAppointmentV2Loaded = true;
      });
    await this.loadAppointmentActions();
    await this.loadGetAppointmentAmountDueResponse();
  }

  async loadAppointmentActions() {
    this.isAppointmentActionsV3ListLoaded = false;
    const appointmentActionsV3List: AppointmentActionV3[] = await this.getAppointmentActions();
    this.appointmentActionsV3List = appointmentActionsV3List;
    this.isAppointmentActionsV3ListLoaded = true;
  }

  async getAppointmentActions(): Promise<AppointmentActionV3[]> {
    const appointmentActionsV3List: AppointmentActionV3[] = await this.appointmentActionsServiceWrapperService
      .getAppointmentActionsByAppointmentIdV2(this.appointmentV2.id);
    return appointmentActionsV3List;
  }

  async loadGetAppointmentAmountDueResponse() {
    this.isGetAppointmentAmountDueResponseLoaded = false;
    const appointmentId: number = this.appointmentV2.id;
    const getAppointmentAmountDueResponse: GetAppointmentAmountDueResponse =
      await this.getGetAppointmentAmountDueResponse(appointmentId);
    this.getAppointmentAmountDueResponse = getAppointmentAmountDueResponse;
    this.isGetAppointmentAmountDueResponseLoaded = true;
  }

  async getGetAppointmentAmountDueResponse(appointmentId: number): Promise<GetAppointmentAmountDueResponse> {
    const getAppointmentAmountDueRequest: GetAppointmentAmountDueRequest = {
      appointmentId
    };
    const getAppointmentAmountDueResponse: GetAppointmentAmountDueResponse = await this.appointmentService
      .getAppointmentAmountDue(getAppointmentAmountDueRequest);
    return getAppointmentAmountDueResponse;
  }

  async goToAppointmentActionPage(appointmentAction: AppointmentActionV3) {

  }

  async onCompleteAppointmentButtonPressed() {
    const appointment: Appointment = await this.appointmentServiceWrapperService.updateAppointmentStatus(
      this.appointmentV2.id,
      COMPLETE
    );
    await this.reloadCurrentRoute();
    const appointmentV2: AppointmentV2 =
      await this.appointmentServiceWrapperService.getAppointmentV2ById(this.appointmentV2.id);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentV2JSON: JSON.stringify(appointmentV2)
      }
    };
    await this.router.navigate(['appointment-details'], navigationExtras);
  }

  async onCheckInAppointmentButtonPressed() {
    const updateAppointmentStatusRequest: UpdateAppointmentStatusRequest = {
      appointmentId: this.appointmentV2.id,
      updatedStatus: CHECKED_IN
    };
    const updateAppointmentStatusResponse: UpdateAppointmentStatusResponse =
      await this.appointmentService.updateAppointmentStatus(updateAppointmentStatusRequest);
    const appointmentV2JSON: string = JSON.stringify(this.appointmentV2);
    const appointmentV2: AppointmentV2 =
      await this.appointmentServiceWrapperService.getAppointmentV2ById(this.appointmentV2.id);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentV2JSON: JSON.stringify(appointmentV2)
      }
    };
    await this.reloadCurrentRoute();
    await this.router.navigate(['appointment-details'], navigationExtras);
  }

  async reloadCurrentRoute() {
    const currentUrl = this.router.url;
    await this.router.navigate(['/'], {skipLocationChange: true}).then(() => {
      this.router.navigate(['/appointment']);
    });
  }

  async onCreateAppointmentActionButtonPressed() {
    const appointmentId: number = this.appointmentV2.id;
    const appointmentIdString: string = '' + appointmentId;
    const appointmentV2Displayable: AppointmentV2Displayable =
      await this.appointmentAdapterService.adaptToAppointmentV2Displayable(this.appointmentV2);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentId: appointmentIdString,
        appointmentJSON: JSON.stringify(appointmentV2Displayable)
      }
    };
    await this.router.navigate(['create-appointment-action'], navigationExtras);
  }

  async onAddPaymentButtonPressed() {
    console.log('onAddPaymentButtonPressed');
    const navigationExtras: NavigationExtras = {
      queryParams: {
        getAppointmentAmountDueResponseJSON: JSON.stringify(this.getAppointmentAmountDueResponse)
      }
    };
    await this.router.navigate(['payment'], navigationExtras);
  }

  async onRevertToCheckedInButtonPressed() {
    const updateAppointmentStatusRequest: UpdateAppointmentStatusRequest = {
      appointmentId: this.appointmentV2.id,
      updatedStatus: CHECKED_IN
    };
    const updateAppointmentStatusResponse: UpdateAppointmentStatusResponse =
      await this.appointmentService.updateAppointmentStatus(updateAppointmentStatusRequest);
    const appointmentV2: AppointmentV2 =
      await this.appointmentServiceWrapperService.getAppointmentV2ById(this.appointmentV2.id);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentV2JSON: JSON.stringify(appointmentV2)
      }
    };
    await this.router.navigate(['appointment-details'], navigationExtras);
  }

  async goToMoveHorsePage() {
    await this.router.navigate(['move-horse']);
  }
}
