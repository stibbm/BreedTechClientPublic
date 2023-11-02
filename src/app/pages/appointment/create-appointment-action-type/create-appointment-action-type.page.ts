import { Component, OnInit } from '@angular/core';
import {AppointmentActionTypeService} from '../../../services/appointment-action-type.service';
import {CreateAppointmentActionTypeRequest, CreateAppointmentActionTypeResponse} from "../../../model/AppointmentActionType";
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-create-appointment-action-type',
  templateUrl: './create-appointment-action-type.page.html',
  styleUrls: ['./create-appointment-action-type.page.scss'],
})
export class CreateAppointmentActionTypePage implements OnInit {

  name: string;
  description: string;
  amountCents: number;
  smsMessage: string;

  constructor(
    private appointmentActionTypeService: AppointmentActionTypeService,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.authService.verifyUserLoggedIn();
  }

  async onCreateAppointmentActionTypeButtonPressed() {
    console.log('onCreateAppointmentActionTypeButtonPressed');
    const amountCents = this.amountCents * 100;
    const createAppointmentActionTypeRequest: CreateAppointmentActionTypeRequest = {
      name: this.name,
      description: this.description,
      amountCents,
      smsMessage: this.smsMessage
    };
    const createAppointmentActionTypeResponse: CreateAppointmentActionTypeResponse =
      await this.appointmentActionTypeService.createAppointmentActionType(
        createAppointmentActionTypeRequest
      );
    console.log('createAppointmentActionTypeResponse: ' + createAppointmentActionTypeResponse);
    await this.router.navigate(['appointment-action-types']);
    await this.reset();
  }

  async reset() {
    this.name = '';
    this.description = '';
    this.amountCents = undefined;
    this.smsMessage = '';
  }

}
