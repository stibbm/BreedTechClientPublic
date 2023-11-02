import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../../../services/appointments.service';
import {
  Appointment,
  GetAllAppointmentsResponse,
  GetAppointmentAmountDueRequest,
  GetAppointmentAmountDueResponse
} from '../../../model/Appointment';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-appointments-amount-due',
  templateUrl: './appointments-amount-due.page.html',
  styleUrls: ['./appointments-amount-due.page.scss'],
})
export class AppointmentsAmountDuePage implements OnInit {

  getAppointmentAmountDueResponsesList: GetAppointmentAmountDueResponse[] = [];

  getAppointmentAmountDueResponsesListLoaded = false;

  displayColumns: string[] = [
    'appointmentId',
    'totalAmountDue',
    'totalAmountPaid',
    'currentAmountDue',
    'actions'
  ];

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    console.log('ionViewWillEnter!');
    const getAllAppointmentsResponse: GetAllAppointmentsResponse = await this.appointmentService.getAllAppointments();
    const appointmentsList: Appointment[] = getAllAppointmentsResponse.appointmentsList;
    this.getAppointmentAmountDueResponsesListLoaded = false;
    const getAppointmentAmountDueResponsesList: GetAppointmentAmountDueResponse[] = [];
    for (var i=0;i<appointmentsList.length;i++) {
      const appointment: Appointment = appointmentsList[i];
      const appointmentId: number = appointment.id;
      const getAppointmentAmountDueRequest: GetAppointmentAmountDueRequest = {
        appointmentId
      };
      const getAppointmentAmountDueResponse: GetAppointmentAmountDueResponse =
        await this.appointmentService.getAppointmentAmountDue(getAppointmentAmountDueRequest);
      getAppointmentAmountDueResponsesList.push(getAppointmentAmountDueResponse);
      //this.getAppointmentAmountDueResponsesList.push(getAppointmentAmountDueResponse);
      console.log('currentAmountDue');
      console.log(getAppointmentAmountDueResponse.currentAmountDue);
    }
    this.getAppointmentAmountDueResponsesList = getAppointmentAmountDueResponsesList;
    this.getAppointmentAmountDueResponsesListLoaded = true;
  }

  async onPayButtonPressed(getAppointmentAmountDueResponse: GetAppointmentAmountDueResponse) {
    console.log('onPayButtonPressed');
    console.log('getAppointmentAmountDueResponse');
    console.log(getAppointmentAmountDueResponse);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentId: getAppointmentAmountDueResponse.appointmentId,
        getAppointmentAmountDueResponseJSON: JSON.stringify(getAppointmentAmountDueResponse)
      }
    };
    await this.router.navigate(['payment'], navigationExtras);
  }
}
