import {AppointmentAction} from './AppointmentAction';

export const CHECKED_IN = 'CheckedIn';
export const SCHEDULED = 'Scheduled';
export const COMPLETE = 'Complete';


/*export class Appointment {
  id: number;
  horseId: number;
  breedingContractFileId: number;
  createdByUserId: number;
  appointmentStatus: string;
};*/

import {Horse} from './Horse';
import {User} from './User';
import {PaymentV2} from './Payment';

export class Appointment {
  id: number;
  horseId: number;
  userId: number;
  createdByUserId: number;
  appointmentStatus: string;
  createdAtTimestamp: number;
};

export class AppointmentV2 {
  id: number;
  horse: Horse;
  user: User;
  createdByUser: User;
  appointmentStatus: string;
  createdAtTimestamp: number;
};

export type AppointmentV2Displayable = {
  id: number;
  horseName: string;
  userFirstAndLastName: string;
  createdByUserFirstAndLastName: string;
  appointmentStatus: string;
  createdAtTimestamp: number;
};

export type CreateAppointmentV2Request = {
  horseId: number;
  userId: number;
  reason: string;
  notificationsPhoneNumber;
};

export type CreateAppointmentV2Response = {
  appointment: Appointment;
};

export type CreateAppointmentContentRequest = {
  horseId: number;
  createdByUserId: number;
};

export type CreateAppointmentContentResponse = {
  appointment: Appointment;
};

export type CreateAppointmentRequest = {
  horseId: number;
  breedingContractId: number;
  createdByUserId: number;
  appointmentStatus: string;
};

export type CreateAppointmentResponse = {
  appointment: Appointment;
};

export type GetActiveAppointmentsByHorseIdRequest = {
  horseId: number;
};

export type GetActiveAppointmentsByHorseIdResponse = {
  appointmentsList: Appointment[];
};

export type GetAllAppointmentsResponse = {
  appointmentsList: Appointment[];
};

export type GetAppointmentsV2Response = {
  appointmentsList: AppointmentV2[];
};

export type GetAppointmentsV2Request = {
  authToken: string;
};

export type UpdateAppointmentStatusRequest = {
  appointmentId: number;
  updatedStatus: string;
};

export type UpdateAppointmentStatusResponse = {
  appointment: Appointment;
};

export type GetAppointmentAmountDueRequest = {
  appointmentId: number;
};

export type GetAppointmentAmountDueResponse = {
  appointmentId: number;
  appointmentActionsList: AppointmentAction[];
  paymentV2sList: PaymentV2[];
  totalAmountDue: number;
  totalAmountPaid: number;
  currentAmountDue: number;
};

export class AppointmentAmountDueDisplayable {
 totalAmountDue: number;
 totalAmountPaid: number;
 currentAmountDue: number;
};

export type GetAppointmentV2ByIdRequest = {
  id: number;
};

export type GetAppointmentV2ByIdResponse = {
  appointmentV2: AppointmentV2;
};

export type GetAppointmentsByUserIdRequest = {
  userId: number;
};

export type GetAppointmentsByUserIdResponse = {
  appointmentsList: AppointmentV2[];
};

export type GetAppointmentsByHorseIdRequest = {
  horseId: number;
};

export type GetAppointmentsByHorseIdResponse = {
  appointmentsList: AppointmentV2[];
};
