import {Horse} from './Horse';


export class Stall {
  id: number;
  name: string;
  description: string;
  capacity: number;
  notes: string;
  companyId: number;
};

export class StallOccupancy {
  stallId: number;
  name: string;
  horsesList: Horse[];
  capacity: number;
  description: string;
  notes: string;
  companyId: number;
};

export type StallOccupancyDisplayable = {
  stallId: number;
  name: string;
  horsesList: string;
  capacity: number;
  occupants: number;
  description: string;
  notes: string;
  companyId: number;
};

export type CreateStallRequest = {
  name: string;
  description: string;
  horseIdsList: number[];
  capacity: number;
  notes: string;
  companyId: number;
};

export type CreateStallResponse = {
  stall: Stall;
};

export type CreateStallRequestContents = {
  name: string;
  description: string;
  capacity: number;
  notes: string;
  userId: number;
};

export type CreateStallResponseContents = {
  stall: Stall;
};

export type GetAllStallsOccupancyResponse = {
  stallOccupanciesList: StallOccupancy[];
};

export type GetAllStallsResponse = {
  stallsList: Stall[];
};

export type GetEmptyStallsResponse = {
  stallsList: Stall[];
};

export type CreateStallSimpleRequest = {
  stallName: string;
  capacity: number;
  description: string;
  notes: string;
};

export type CreateStallSimpleResponse = {
  stall: Stall;
};

