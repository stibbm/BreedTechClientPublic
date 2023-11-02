
export class HorseLocation {
  id: number;
  horseId: number;
  stallId: number;
  timestamp: number;
}

export type CreateHorseLocationRequest = {
  horseId: number;
  stallId: number;
};

export type CreateHorseLocationResponse = {
  horseLocation: HorseLocation;
};

export type GetAllHorseLocationsResponse = {
  horseLocationsList: HorseLocation[];
};

export type GetHorseLocationByHorseIdRequest = {
  horseId: number;
};

export type GetHorseLocationByHorseIdResponse = {
  horseLocation: HorseLocation;
};

export type GetHorseLocationByIdRequest = {
  id: number;
};

export type GetHorseLocationByIdResponse = {
  horseLocation: HorseLocation;
};

export type MoveHorseRequest = {
  horseId: number;
  destinationStallId: number;
};

export type MoveHorseResponse = {
  horseLocation: HorseLocation;
};
