import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GetAllHorsesResponse, Horse, HorseV2} from '../../../model/Horse';
import {AppointmentService} from "../../../services/appointments.service";
import {HorseService} from "../../../services/horses.service";
import {GetActiveAppointmentsByHorseIdRequest, GetActiveAppointmentsByHorseIdResponse} from "../../../model/Appointment";
import {LoaderService} from "../../../services/loader.service";

@Component({
  selector: 'app-horse-selector-by-active-appointment',
  templateUrl: './horse-selector-by-active-appointment.component.html',
  styleUrls: ['./horse-selector-by-active-appointment.component.scss'],
})
export class HorseSelectorByActiveAppointmentComponent implements OnInit {

  @Output() horseSelectedEventEmitter = new EventEmitter<Horse>();

  searchTerm = '';
  horsesList: Horse[] = [];
  horse: Horse;

  horseV2sList: HorseV2[] = [];
  horseV2: HorseV2;

  isHorseV2sListLoaded = false;
  isHorseV2Selected = false;

  isHorsesListLoaded = false;
  isSelectorCompleted = false;

  constructor(
    private horseService: HorseService,
    private appointmentService: AppointmentService,
    private loaderService: LoaderService
  ) { }

  async ngOnInit() {
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.loaderService.autoLoader();
    console.log('ionViewWillEnter: Horse Selectpr By Active Appointments');
    //await this.loadHorsesList();
    await this.loadHorseV2sList();
    await this.loaderService.closeLoader();
  }

  async loadHorseV2sList() {
    const horseV2sList: HorseV2[] = await this.horseService.getHorsesWithActiveAppointmentSimple();
    this.horseV2sList = horseV2sList;
    console.log('horseV2sList');
    console.log(horseV2sList);
    this.isHorseV2sListLoaded = true;
  }

  async loadHorsesList() {
    this.isHorsesListLoaded = false;
    console.log('loadHorsesList');
    const getAllHorsesResponse: GetAllHorsesResponse =
      await this.horseService.getAllHorses();
    const horsesList: Horse[] = getAllHorsesResponse.horsesList;
    const filteredHorsesList: Horse[] = await this.filterHorsesList(horsesList);
    this.horsesList = filteredHorsesList;
    this.isHorsesListLoaded = true;
  }

  async filterHorsesList(horsesList: Horse[]): Promise<Horse[]> {
    console.log('filterHorsesList');
    const filteredHorsesList: Horse[] = [];
    for (var i=0;i<horsesList.length;i++) {
      const horse: Horse = horsesList[i];
      const horseId: number = horse.id;
      const getActiveAppointmentsByHorseIdRequest: GetActiveAppointmentsByHorseIdRequest = {
        horseId
      };
      const getActiveAppointmentsByHorseIdResponse: GetActiveAppointmentsByHorseIdResponse =
        await this.appointmentService.getActiveAppointmentsByHorseId(getActiveAppointmentsByHorseIdRequest);
      const appointmentsListLength: number = getActiveAppointmentsByHorseIdResponse.appointmentsList.length;
      console.log('appointmentsListLength');
      console.log(appointmentsListLength);
      if (appointmentsListLength > 0) {
        filteredHorsesList.push(horse);
      }
    }
    return filteredHorsesList;
  }

  async getHorseId(): Promise<number> {
    const horseId: number = this.horse.id;
    return horseId;
  }

  async getHorse(): Promise<Horse> {
    const horse: Horse = this.horse;
    return horse;
  }

  async getHorseV2Id(): Promise<number> {
    const horseV2Id: number = this.horseV2.horseId;
    return horseV2Id;
  }

  async getHorseV2(): Promise<HorseV2> {
    const horseV2: HorseV2 = this.horseV2;
    return horseV2;
  }
}
