import {AppointmentWithCostSummary} from "../model/AppointmentWithCostSummary";
import {AppointmentV2Displayable, GetAppointmentAmountDueResponse} from "../model/Appointment";

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function convertToAppointmentWithCostSummary(
  appointmentV2Displayable: AppointmentV2Displayable,
  getAppointmentAmountDueResponse: GetAppointmentAmountDueResponse
): AppointmentWithCostSummary
{
  const appointmentWithCostSummary: AppointmentWithCostSummary = {
    id: appointmentV2Displayable.id,
    horseName: appointmentV2Displayable.horseName,
    status: appointmentV2Displayable.appointmentStatus,
    amountDueDollarsReadable: '$ ' + (getAppointmentAmountDueResponse.totalAmountDue/100),
    amountPaidDollarsReadable: '$ ' + (getAppointmentAmountDueResponse.totalAmountPaid/100),
    remainingAmountDueDollarsReadable: '$ ' + (getAppointmentAmountDueResponse.currentAmountDue/100),
    userFirstAndLastName: appointmentV2Displayable.userFirstAndLastName,
    createdByUserFirstAndLastName: appointmentV2Displayable.createdByUserFirstAndLastName
  };
  return appointmentWithCostSummary;
}
