import {Appointment} from '../model/Appointment';
import {AppointmentActionTypeDisplayable} from '../model/AppointmentActionType';


// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function getAppointmentsWithNamesMatchingQuery(
  appointmentsActionTypeDisplayablesList: AppointmentActionTypeDisplayable[], filter: string
): AppointmentActionTypeDisplayable[]
{
  const filteredAppointmentActionTypeDisplayablesList: AppointmentActionTypeDisplayable[] = [];
  for (let i=0;i<appointmentsActionTypeDisplayablesList.length;i++) {
    const appointmentActionTypeDisplayable: AppointmentActionTypeDisplayable = appointmentsActionTypeDisplayablesList[i];
    if (appointmentActionTypeDisplayable.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1) {
      filteredAppointmentActionTypeDisplayablesList.push(appointmentActionTypeDisplayable);
    }
  }
  return filteredAppointmentActionTypeDisplayablesList;
}
