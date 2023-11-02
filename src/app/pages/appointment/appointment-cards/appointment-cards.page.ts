import { Component, OnInit } from '@angular/core';
import {AppointmentService} from '../../../services/appointments.service';
import {AppointmentV2, GetAppointmentsV2Response} from '../../../model/Appointment';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-appointment-cards',
  templateUrl: './appointment-cards.page.html',
  styleUrls: ['./appointment-cards.page.scss'],
})
export class AppointmentCardsPage implements OnInit {

  appointmentsList: AppointmentV2[];

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.ionViewWillEnter();
    await this.authService.verifyUserLoggedIn();
  }

  async ionViewWillEnter() {
    await this.loadAppointments();
  }

  async loadAppointments() {
    const appointmentV2sList: AppointmentV2[] = await this.getAppointments();
    this.appointmentsList = appointmentV2sList;
  }

  async getAppointments(): Promise<AppointmentV2[]> {
    const appointmentsV2Response: GetAppointmentsV2Response = await this.appointmentService.getAppointmentsV2();
    const appointmentV2sList: AppointmentV2[] = appointmentsV2Response.appointmentsList;
    return appointmentV2sList;
  }

  async goToAppointmentPage(appointmentV2: AppointmentV2) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentV2JSON: JSON.stringify(appointmentV2)
      }
    };
    await this.router.navigate(['appointment-details'], navigationExtras);
  }

  async gotToCreateAppointmentPage() {
    await this.router.navigate(['create-appointment']);
  }
}
