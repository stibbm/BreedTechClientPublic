

export class AppointmentAction {
  id: number;
  appointmentId: number;
  description: string;
  smsMessage: string;
  timestamp: number;
  createdByUserId: number;
}

export class AppointmentActionV3 {
  id: number;
  customerFirstAndLastName: string;
  description: string;
  humanReadableTimestamp: string;
  createdByUserFirstAndLastName: string;
  amount: string;
  smsMessage: string;
};

export type GetAppointmentActionsV3Response = {
  appointmentActionsList: AppointmentActionV3[];
};

export type CreateAppointmentActionRequest = {
  appointmentId: number;
  description: string;
  smsMessage: string;
};

export type CreateAppointmentActionResponse = {
  appointmentAction: AppointmentAction;
};

export type GetAppointmentActionsByAppointmentIdRequest = {
  appointmentId: number;
};

export type GetAppointmentActionsByAppointmentIdResponse = {
  appointmentActionsList: AppointmentAction[];
};

export type GetAppointmentActionsResponse = {
  appointmentActionsList: AppointmentAction[];
};


export type CreateAppointmentActionByActionTypeRequest = {
  appointmentId: number;
  appointmentActionTypeId: string;
};

export type CreateAppointmentActionByActionTypeResponse = {
  appointmentAction: AppointmentAction;
};

export type GetAppointmentActionsByAppointmentIdV2Request = {
  appointmentId: number;
};

export type GetAppointmentActionsByAppointmentIdV2Response = {
  appointmentActionsList: AppointmentActionV3[];
};

export type GetAppointmentActionsByHorseIdRequest = {
  horseId: number;
};

export type GetAppointmentActionsByHorseIdResponse = {
  appointmentActionsList: AppointmentActionV3[];
};

export type GetAppointmentActionsByUserIdRequest = {
  userId: number;
};

export type GetAppointmentActionsByUserIdResponse = {
  appointmentActionsList: AppointmentActionV3[];
};

export type GetAppointmentActionsByUserIdV2Request = {
  userId: string;
};

export type GetAppointmentActionsByUserIdV2Response = {
  appointmentActionsList: AppointmentActionV3[];
};

export type GetAppointmentActionsByTimestampRequest = {
  startTimestamp: number;
  endTimestamp: number;
};

export type GetAppointmentActionsByTimestampResponse = {
  appointmentActionsList: AppointmentAction;
};
