import {Component, OnInit, ViewChild} from '@angular/core';
import {AppointmentService} from '../../../services/appointments.service';
import {NavigationExtras, Router} from '@angular/router';
import {
  Appointment,
  AppointmentV2,
  AppointmentV2Displayable,
  CHECKED_IN,
  COMPLETE,
  GetAllAppointmentsResponse,
  GetAppointmentsV2Response,
  GetAppointmentV2ByIdRequest, GetAppointmentV2ByIdResponse,
  UpdateAppointmentStatusRequest,
  UpdateAppointmentStatusResponse
} from '../../../model/Appointment';
import {UserSelectorComponent} from '../../../components/selectors/user-selector/user-selector.component';
import {User} from '../../../model/User';
import {
  CreateAppointmentInputComponent
} from '../../../components/inputs/create-appointment-input/create-appointment-input.component';
import {AppointmentAdapterService} from '../../../services/appointment-adapter.service';
import {KeyValueStorageService} from '../../../services/key-value-storage.service';
import {LoaderService} from '../../../services/loader.service';
import {AuthService} from '../../../services/auth.service';
import {CalendarService} from '../../../services/calendar.service';
import {CalendarDate, GetMonthDatesRequest, GetMonthDatesResponse} from '../../../model/CalendarDate';
import {AppointmentServiceWrapperService} from "../../../wrapper/appointment-service-wrapper.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  datesList: CalendarDate[] = [];
  isDatesListLoaded = false;

  columns = [
    {name: 'Id', prop: 'id'},
    {name: 'Horse', prop: 'horseName'},
    {name: 'User', prop: 'userFirstAndLastName'},
    {name: 'CreatedBy', prop: 'createdByUserFirstAndLastName'},
    {name: 'Status', prop: 'appointmentStatus'},
  ];

  appointmentsList: AppointmentV2Displayable[];
  isAppointmentsListLoaded = false;

  constructor(
    private appointmentService: AppointmentService,
    private appointmentServiceWrapperService: AppointmentServiceWrapperService,
    private router: Router,
    private appointmentAdapterService: AppointmentAdapterService,
    private loaderService: LoaderService,
    private authService: AuthService,
    private calendarService: CalendarService,
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    const timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
    await this.loaderService.autoLoader();
    await this.authService.verifyUserLoggedIn();
    await this.loadAppointmentsList();
    const getMonthDatesRequest: GetMonthDatesRequest = {
      yearNumber: 2022,
      monthNumber: 4
    };
    const getMonthDatesResponse: GetMonthDatesResponse =
      await this.calendarService.getWeekDates(getMonthDatesRequest);
    await this.loaderService.closeLoader();
    await this.loadCalendarDates();
  }

  async loadCalendarDates() {
    const getMonthDatesRequest: GetMonthDatesRequest = {
      yearNumber: 2022,
      monthNumber: 3
    };
    const getMonthDatesResponse: GetMonthDatesResponse =
      await this.calendarService.getWeekDates(getMonthDatesRequest);
    this.datesList = getMonthDatesResponse.calendarDatesList;
    this.isDatesListLoaded = true;
  }

  async loadAppointmentsList() {
    const appointmentV2sList: AppointmentV2[] = await this.appointmentServiceWrapperService.getAppointmentsV2();
    const appointmentV2DisplayablesList: AppointmentV2Displayable[] = this.appointmentAdapterService
      .adaptListToAppointmentV2Displayable(appointmentV2sList);
    this.appointmentsList = appointmentV2DisplayablesList;
    this.isAppointmentsListLoaded = true;
  }

  async onCreateAppointmentButtonPressed() {
    await this.router.navigate(['create-appointment']);
  }

  /*
  async viewAppointmentActions(appointmentV2Displayable: AppointmentV2Displayable) {
    const appointmentId: number = appointmentV2Displayable.id;
    const appointmentIdString: string = '' + appointmentId;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentId: appointmentIdString,
        appointmentJSON: JSON.stringify(appointmentV2Displayable)
      }
    };
    await this.router.navigate(['appointment-action'], navigationExtras);
  }*/

  /*
  async onAddAppointmentActionButtonPressed(appointmentV2Displayable: AppointmentV2Displayable) {
    const appointmentId: number = appointmentV2Displayable.id;
    const appointmentIdString: string = '' + appointmentId;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentId: appointmentIdString,
        appointmentJSON: JSON.stringify(appointmentV2Displayable),
      }
    };
    await this.router.navigate(['create-appointment-action'], navigationExtras);
  }*/

  /*
  async onCheckInButtonPressed(element) {
    const updateAppointmentStatusRequest: UpdateAppointmentStatusRequest = {
      appointmentId: element.id,
      updatedStatus: CHECKED_IN
    };
    const updateAppointmentStatusResponse: UpdateAppointmentStatusResponse =
      await this.appointmentService.updateAppointmentStatus(updateAppointmentStatusRequest);
    alert('Appointment Checked In');
    await this.reloadCurrentRoute();
  }*/

  /*
  async onCompleteButtonPressed(element) {
    const updateAppointmentStatusRequest: UpdateAppointmentStatusRequest = {
      appointmentId: element.id,
      updatedStatus: COMPLETE
    };
    const updateAppointmentStatusResponse: UpdateAppointmentStatusResponse =
      await this.appointmentService.updateAppointmentStatus(updateAppointmentStatusRequest);
    alert('Appointment Completed');
    await this.reloadCurrentRoute();
  }*/

  /*
  async reloadCurrentRoute() {
    const currentUrl = this.router.url;
    await this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }*/

  /*
  async onCreateAppointmentActionTypeButtonPressed() {
    await this.router.navigate(['create-appointment-action-type']);
  }*/

  async goToAppointmentPage(appointment: AppointmentV2Displayable) {
    const appointmentId: number = appointment.id;
    const appointmentV2: AppointmentV2 = await this.appointmentServiceWrapperService.getAppointmentV2ById(appointmentId);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentV2JSON: JSON.stringify(appointmentV2)
      }
    };
    await this.router.navigate(['appointment-details'], navigationExtras);
  }

  async goToCreateAppointmentPage() {
    await this.router.navigate(['create-appointment']);
  }
}
