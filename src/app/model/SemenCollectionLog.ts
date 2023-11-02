
export class SemenCollectionLog {
  id: number;
  appointmentId: number;
  strawsCount: number;
  userId: number;
  timestamp: number;
};

export class SemenCollectionLogDisplayable {
  horseName: string;
  userFirstNameAndLastName: string;
  strawsCount: number;
  timestamp: number;
};

export type CreateSemenCollectionLogRequest = {
  appointmentId: number;
  strawsCount: number;
};

export type CreateSemenCollectionLogResponse = {
  semenCollectionLog: SemenCollectionLog;
};

export type GetSemenCollectionLogsResponse = {
  semenCollectionLogsList: SemenCollectionLog[];
};

export type CreateSemenCollectionLogByHorseIdRequest = {
  horseId: number;
  strawsCount: number;
};

export type CreateSemenCollectionLogByHorseIdResponse = {
  semenCollectionLog: SemenCollectionLog;
};



