import { Injectable } from '@angular/core';
import {AppointmentV2, AppointmentV2Displayable} from '../model/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentAdapterService {

  constructor() { }

  adaptListToAppointmentV2Displayable(appointmentV2sList: AppointmentV2[]): AppointmentV2Displayable[] {
    console.log(appointmentV2sList);
    const appointmentV2DisplayablesList: AppointmentV2Displayable[] = [];
    for (var i=0;i<appointmentV2sList.length;i++) {
      const appointmentV2 = appointmentV2sList[i];
      console.log('appointmentV2::::');
      console.log(appointmentV2);
      const appointmentV2Displayable: AppointmentV2Displayable = this.adaptToAppointmentV2Displayable(appointmentV2);
      appointmentV2DisplayablesList.push(appointmentV2Displayable);
    }
    return appointmentV2DisplayablesList;
  }

  adaptToAppointmentV2Displayable(appointmentV2: AppointmentV2): AppointmentV2Displayable {
    console.log('adaptToAppointmentV2Displayable');
    const appointmentV2Displayable: AppointmentV2Displayable = {
      id: appointmentV2.id,
      horseName: appointmentV2.horse.name,
      userFirstAndLastName: appointmentV2.user.firstName + ' ' + appointmentV2.user.lastName,
      createdByUserFirstAndLastName: appointmentV2.createdByUser.firstName + ' ' + appointmentV2.createdByUser.lastName,
      appointmentStatus: appointmentV2.appointmentStatus,
      createdAtTimestamp: appointmentV2.createdAtTimestamp
    };
    console.log("appointmentV2Displayable::");
    console.log(appointmentV2Displayable);
    return appointmentV2Displayable;
  }


}
