import { Component, OnInit } from '@angular/core';
import {AppointmentActionService} from "../../../services/appointment-action.service";

@Component({
  selector: 'app-appointment-actions',
  templateUrl: './appointment-actions.page.html',
  styleUrls: ['./appointment-actions.page.scss'],
})
export class AppointmentActionsPage implements OnInit {

  constructor(
    private appointmentActionService: AppointmentActionService
  ) {}

  async ngOnInit() {
  }

}
