import {Component, OnInit, ViewChild} from '@angular/core';
import {HorseSelectorComponent} from "../../selectors/horse-selector/horse-selector.component";
import {
  Appointment,
  GetActiveAppointmentsByHorseIdRequest,
  GetActiveAppointmentsByHorseIdResponse
} from "../../../model/Appointment";
import {AppointmentService} from "../../../services/appointments.service";
import {SemenCollectionLogService} from "../../../services/semen-collection-log.service";

@Component({
  selector: 'app-create-semen-collection-log-input',
  templateUrl: './create-semen-collection-log-input.component.html',
  styleUrls: ['./create-semen-collection-log-input.component.scss'],
})
export class CreateSemenCollectionLogInputComponent implements OnInit {

  @ViewChild(HorseSelectorComponent, {static: false}) horseSelectorComponent;

  strawsCount: number;
  horseId: number;

  constructor(
    private appointmentService: AppointmentService,
    private semenCollectionLogService: SemenCollectionLogService
  ) {}

  ngOnInit() {}

  public async getAppointment(): Promise<Appointment> {
    const getActiveAppointmentsByHorseIdRequest: GetActiveAppointmentsByHorseIdRequest = {
      horseId: await this.horseSelectorComponent.getHorseId()
    };
    const getActiveAppointmentsByHorseIdResponse: GetActiveAppointmentsByHorseIdResponse =
      await this.appointmentService.getActiveAppointmentsByHorseId(getActiveAppointmentsByHorseIdRequest);
    const appointment: Appointment = getActiveAppointmentsByHorseIdResponse.appointmentsList[0];
    return appointment;
  }

  public async getHorseId(): Promise<number> {
    return await this.horseSelectorComponent.getHorseId();
  }

  public async getStrawsCount(): Promise<number> {
    return this.strawsCount;
  }

}
