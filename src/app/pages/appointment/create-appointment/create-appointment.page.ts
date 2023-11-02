import {Component, OnInit, ViewChild} from '@angular/core';
import {
  CreateAppointmentInputComponent
} from '../../../components/inputs/create-appointment-input/create-appointment-input.component';
import {Appointment, CreateAppointmentV2Request, CreateAppointmentV2Response} from '../../../model/Appointment';
import {AppointmentService} from '../../../services/appointments.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {Horse, HorseV2} from '../../../model/Horse';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.page.html',
  styleUrls: ['./create-appointment.page.scss'],
})
export class CreateAppointmentPage implements OnInit {

  @ViewChild(CreateAppointmentInputComponent, {static: false}) createAppointmentInputComponent:
    CreateAppointmentInputComponent;

  appointment: Appointment;

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
  }

  async onCreateAppointmentButtonPressed() {
    try {
      const horse: HorseV2 = await this.createAppointmentInputComponent.getSelectedHorse();
      const createAppointmentV2Request: CreateAppointmentV2Request = {
        userId: await this.createAppointmentInputComponent.getSelectedUser().id,
        horseId: horse.horseId,
        reason: await this.createAppointmentInputComponent.getSelectedReason(),
        notificationsPhoneNumber: await this.createAppointmentInputComponent.getSelectedPhoneNumber(),
      };
      const createAppointmentV2Response: CreateAppointmentV2Response =
        await this.appointmentService.createAppointmentV2(createAppointmentV2Request);
      this.appointment = createAppointmentV2Response.appointment;
      console.log('CREATE APPOINTMENT V2 RESPONSE: ');
      console.log(createAppointmentV2Response);
      await this.router.navigate(['appointment']);
    } catch (e) {
      console.log('error');
      console.log(e);
      alert(e.error);
    }
  }
}
