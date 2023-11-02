


export class AppointmentActionType {
  id: number;
  name: string;
  description: string;
  amountCents: number;
  companyId: number;
};

export class AppointmentActionTypeDisplayable {
  id: string;
  name: string;
  description: string;
  amount: string;
  smsMessage: string;
};

export type GetAppointmentActionTypesDisplayableResponse = {
  appointmentActionTypeDisplayablesList: AppointmentActionTypeDisplayable[];
};

export type CreateAppointmentActionTypeRequest = {
    name: string;
    description: string;
    amountCents: number;
    smsMessage: string;
};

export type CreateAppointmentActionTypeResponse = {
  appointmentTypeActionType: AppointmentActionType;
};

export type GetAppointmentActionTypesByCompanyIdRequest = {
  companyId: number;
};

export type GetAppointmentActionTypesByCompanyIdResponse = {
  appointmentActionTypes: AppointmentActionType[];
};

