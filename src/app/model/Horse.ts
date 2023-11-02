export class Horse {
  id: number;
  name: string;
  registrationNumber: string;
  isStallion: boolean;
  dam: string;
  sire: string;
  damSire: string;
  ownerUserId: number;
};

export class HorseV2 {
  horseId?: number | undefined;
  horseName: string;
  horseRegistrationNumber: string;
  isStallion: string;
  damName: string;
  sireName: string;
  damSireName: string;
  ownerFirstAndLastName: string;
  stallName: string;
};

export type GetHorsesV2Response = {
  horsesV2List: HorseV2[];
};

export type CreateHorseRequest = {
  name: string;
  registrationNumber: string;
  isStallion: boolean;
  dam: string;
  sire: string;
  damSire: string;
  ownerUserId: number;
};

export type CreateHorseResponse = {
  horse: Horse;
};

export type GetAllHorsesResponse = {
  horsesList: Horse[];
};

export type GetHorsesByOwnerIdRequest = {
  ownerId: number;
};

export type GetHorsesByOwnerIdResponse = {
  horsesList: Horse[];
};

export type HorseWithLocation = {
  stallId: number;
  stallName: string;
  horseId: number;
  horseName: string;
  registrationNumber: string;
  dam: string;
  sire: string;
  damSire: string;
  ownerUserId: number;
};

export type GetHorsesWithLocationResponse = {
  horsesWithLocationList: HorseWithLocation[];
};

export type GetStallionsResponse = {
  stallionsList: Stallion[];
};

export class Stallion {
  horseWithLocation: HorseWithLocation;
  lastCollectionDateString: string;
  nextCollectionDateString: string;
};

export type GetHorsesWithActiveAppointmentResponse = {
  horsesList: HorseV2[];
};








