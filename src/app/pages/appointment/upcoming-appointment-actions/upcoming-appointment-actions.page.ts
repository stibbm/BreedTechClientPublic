import { Component, OnInit } from '@angular/core';
import {AppointmentActionTypeService} from "../../../services/appointment-action-type.service";
import {AppointmentActionService} from "../../../services/appointment-action.service";
import {AppointmentActionV3, GetAppointmentActionsV3Response} from "../../../model/AppointmentAction";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-upcoming-appointment-actions',
  templateUrl: './upcoming-appointment-actions.page.html',
  styleUrls: ['./upcoming-appointment-actions.page.scss'],
})
export class UpcomingAppointmentActionsPage implements OnInit {

  displayColumns = [
    'id',
    'appointmentId',
    'description',
    'timestamp',
    'createdByUserId'
  ];

  appointmentActionsV3List: AppointmentActionV3[] = [];
  isAppointmentActionsV3ListLoaded = false;

  constructor(
    private appointmentActionService: AppointmentActionService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    console.log('ionViewWillEnter: UpcomingAppointmentActions');
    const getAppointmentActionsV3Response: GetAppointmentActionsV3Response =
      await this.appointmentActionService.getAppointmentActionsV3();
    console.log(getAppointmentActionsV3Response);
    this.appointmentActionsV3List = getAppointmentActionsV3Response.appointmentActionsList;
    this.isAppointmentActionsV3ListLoaded = true;
  }


}
