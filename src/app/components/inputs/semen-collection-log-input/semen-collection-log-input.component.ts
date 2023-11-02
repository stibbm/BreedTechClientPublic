import { Component, OnInit } from '@angular/core';
import {Appointment} from "../../../model/Appointment";

@Component({
  selector: 'app-semen-collection-log-input',
  templateUrl: './semen-collection-log-input.component.html',
  styleUrls: ['./semen-collection-log-input.component.scss'],
})
export class SemenCollectionLogInputComponent implements OnInit {

  appointment: Appointment;
  strawsCount: number;

  constructor() {}

  async ngOnInit() {}

  async getAppointment() {
    return this.appointment;
  }

  async getStrawsCount() {
    return this.strawsCount;
  }

  async reset() {
    this.appointment = null;
    this.strawsCount = null;
  }
}
