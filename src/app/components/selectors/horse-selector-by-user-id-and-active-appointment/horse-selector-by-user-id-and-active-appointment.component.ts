import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GetHorsesByOwnerIdRequest, GetHorsesByOwnerIdResponse, Horse, HorseV2} from '../../../model/Horse';
import {User} from '../../../model/User';
import {AppointmentService} from '../../../services/appointments.service';
import {HorseService} from '../../../services/horses.service';
import {
  Appointment,
  GetActiveAppointmentsByHorseIdRequest,
  GetActiveAppointmentsByHorseIdResponse
} from '../../../model/Appointment';

@Component({
  selector: 'app-horse-selector-by-user-id-and-active-appointment',
  templateUrl: './horse-selector-by-user-id-and-active-appointment.component.html',
  styleUrls: ['./horse-selector-by-user-id-and-active-appointment.component.scss'],
})
export class HorseSelectorByUserIdAndActiveAppointmentComponent implements OnInit {

  @Output() horseSelectorEventEmitter = new EventEmitter<Horse>();

  user: User;
  searchTerm: '';
  horsesList: Horse[];

  horseV2sList: HorseV2[];
  horseV2: HorseV2;

  horse: Horse;
  isSelectionCompleted = false;

  constructor(
    private horseService: HorseService,
    private appointmentService: AppointmentService
  ) {}

  async ngOnInit() {
    if (this.user != null) {
      await this.ionViewDidLoad();
    }
  }

  async ionViewDidLoad() {
    if (this.user != null) {
      console.log('ionViewDidLoad: HorseSelectorByUserIdAndActiveAppointmentCompoonent');
      await this.loadHorsesList();
    }
  }

  async loadHorsesListV2() {
    const horseV2sList: HorseV2[] = await this.horseService.getHorsesWithActiveAppointmentSimple();
    this.horseV2sList = horseV2sList;
  }

  async loadHorsesList() {
    const getHorsesByOwnerIdRequest: GetHorsesByOwnerIdRequest = {
      ownerId: this.user.id,
    };
    const getHorsesByOwnerIdResponse: GetHorsesByOwnerIdResponse =
      await this.horseService.getHorsesByOwnerId(getHorsesByOwnerIdRequest);
    const horsesList: Horse[] = getHorsesByOwnerIdResponse.horsesList;
    const filteredHorsesList: Horse[] = await this.filterByActiveAppointments(horsesList);
    this.horsesList = filteredHorsesList;
  }

  async filterByActiveAppointments(horsesList: Horse[]): Promise<Horse[]> {
    const filteredHorsesList: Horse[] = [];
    for (var i=0;i<horsesList.length;i++) {
      const horse: Horse = horsesList[i];
      try {
        const getActiveAppointmentsByHorseIdRequest: GetActiveAppointmentsByHorseIdRequest = {
          horseId: horse.id
        };
        const getActiveAppointmentsByHorseIdResponse: GetActiveAppointmentsByHorseIdResponse =
          await this.appointmentService.getActiveAppointmentsByHorseId(getActiveAppointmentsByHorseIdRequest);
        const appointmentsList: Appointment[] = getActiveAppointmentsByHorseIdResponse.appointmentsList;
        if (appointmentsList.length > 0) {
          filteredHorsesList.push(horse);
        }
      } catch (e) {
        console.log("error getting active appointments by horse id");
        console.log(e);
      }
    }
    return filteredHorsesList;
  }

  async onHorseSelected(horse: Horse) {
    this.horse = horse;
    this.isSelectionCompleted = true;
    this.horseSelectorEventEmitter.emit(horse);
  }

  async resetSelector() {
    this.horse = null;
    this.user = null;
    this.searchTerm = '';
    this.isSelectionCompleted = false;
    await this.loadHorsesList();
  }

  async onHorseSelectedV2(horse: HorseV2) {
    this.horseV2 = horse;
    this.isSelectionCompleted = true;
  }
}
