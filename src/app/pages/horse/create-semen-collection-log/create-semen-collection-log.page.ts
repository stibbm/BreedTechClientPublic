import {Component, OnInit, ViewChild} from '@angular/core';
import {
  CreateSemenCollectionLogByHorseIdRequest, CreateSemenCollectionLogByHorseIdResponse,
  CreateSemenCollectionLogRequest,
  CreateSemenCollectionLogResponse,
  SemenCollectionLog
} from '../../../model/SemenCollectionLog';
import {SemenCollectionLogService} from '../../../services/semen-collection-log.service';
import {Options} from '../../../model/Options';
import {Appointment} from '../../../model/Appointment';
import {
  SemenCollectionLogInputComponent
} from '../../../components/inputs/semen-collection-log-input/semen-collection-log-input.component';
import {Router} from '@angular/router';
import {
  CreateSemenCollectionLogInputComponent
} from '../../../components/inputs/create-semen-collection-log-input/create-semen-collection-log-input.component';
import {AuthService} from "../../../services/auth.service";


@Component({
  selector: 'app-create-semen-collection-log',
  templateUrl: './create-semen-collection-log.page.html',
  styleUrls: ['./create-semen-collection-log.page.scss'],
})
export class CreateSemenCollectionLogPage implements OnInit {

  @ViewChild(CreateSemenCollectionLogInputComponent, {static: false}) createSemenCollectionLogInputComponent;

  semenCollectionLog: SemenCollectionLog;
  appointment: Appointment;

  constructor(
    private semenCollectionLogService: SemenCollectionLogService,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {}

  async getAppointment() {
    return this.appointment;
  }

  async onCreateSemenCollectionLogButtonPressed() {
    console.log('onCreateSemenCollectionLogButtonPressed');
    const appointment: Appointment = await this.createSemenCollectionLogInputComponent.getAppointment();
    console.log('appointment');
    console.log(appointment);
    const appointmentId: number = appointment.id;
    console.log('appointmentId: ');
    console.log(appointmentId);
    const strawsCount: number = await this.createSemenCollectionLogInputComponent.getStrawsCount();
    const createSemenCollectionLogRequest: CreateSemenCollectionLogRequest = {
      appointmentId: appointmentId,
      strawsCount: strawsCount,
    };
    console.log('createSemenCollectionLogRequest');
    console.log(createSemenCollectionLogRequest);
    const createSemenCollectionLogResponse: CreateSemenCollectionLogResponse =
      await this.semenCollectionLogService.createSemenCollectionLog(createSemenCollectionLogRequest);
    console.log(createSemenCollectionLogResponse);
    this.semenCollectionLog = createSemenCollectionLogResponse.semenCollectionLog;
    alert('SemenCollectionLog has been created');
    await this.router.navigate(['stallions']);
  }


  async onCreateSemenCollectionLogByHorseIdButtonPressed() {
    const horseId: number = await this.createSemenCollectionLogInputComponent.getHorseId();
    const strawsCount: number = await this.createSemenCollectionLogInputComponent.getStrawsCount();
    const createSemenCollectionLogByHorseIdRequest: CreateSemenCollectionLogByHorseIdRequest = {
      horseId: horseId,
      strawsCount: strawsCount
    };
    const createSemenCollectionLogByHorseIdResponse: CreateSemenCollectionLogByHorseIdResponse =
        await this.semenCollectionLogService.createSemenCollectionLogByHorseId(createSemenCollectionLogByHorseIdRequest);
    alert('SemenCollectionLog has been created');
    await this.router.navigate(['semen-collection-log']);
  }
}
