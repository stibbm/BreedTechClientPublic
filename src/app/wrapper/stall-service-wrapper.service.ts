import { Injectable } from '@angular/core';
import {StallService} from "../services/stalls.service";
import {
  CreateStallRequest,
  CreateStallRequestContents,
  CreateStallResponse, CreateStallSimpleRequest, CreateStallSimpleResponse, GetAllStallsOccupancyResponse,
  GetAllStallsResponse,
  Stall, StallOccupancy
} from "../model/Stall";

@Injectable({
  providedIn: 'root'
})
export class StallServiceWrapperService {

  constructor(
    private stallService: StallService
  ) {}

  async createStall(
    name: string,
    description: string,
    horseIdsList: any,
    capacity: number,
    notes: string,
    companyId: number
  ): Promise<Stall>
  {
    const createStallRequest: CreateStallRequest = {
      name,
      description,
      horseIdsList,
      capacity,
      notes,
      companyId
    };
    const createStallResponse: CreateStallResponse =
      await this.stallService.createStall(createStallRequest);
    const stall: Stall = createStallResponse.stall;
    return stall;
  }

  async getAllStalls():
    Promise<Stall[]>
  {
    const getAllStallsResponse: GetAllStallsResponse =
      await this.stallService.getAllStalls();
    const stallsList: Stall[] = getAllStallsResponse.stallsList;
    return stallsList;
  }

  async createStallContents(
    name: string,
    description: string,
    capacity: number,
    notes: string,
    userId: number
  ): Promise<Stall>
  {
    const createStallRequestContents: CreateStallRequestContents = {
      name,
      description,
      capacity,
      notes,
      userId
    };
    const createStallResponseContents =
      await this.stallService.createStallContents(createStallRequestContents);
    const stall: Stall = createStallResponseContents.stall;
    return stall;
  }

  async getAllStallsOccupancy():
    Promise<StallOccupancy[]>
  {
    const getAllStallsOccupancyResponse: GetAllStallsOccupancyResponse =
      await this.stallService.getAllStallOccupancy();
    const stallOccupanciesList: StallOccupancy[] = getAllStallsOccupancyResponse.stallOccupanciesList;
    return stallOccupanciesList;
  }

  async createStallSimple(
    stallName: string,
    capacity: number,
    description: string,
    notes: string
  ): Promise<Stall>
  {
    const createStallSimpleRequest: CreateStallSimpleRequest = {
      stallName,
      capacity,
      description,
      notes
    };
    const createStallSimpleResponse: CreateStallSimpleResponse =
      await this.stallService.createStallSimple(createStallSimpleRequest);
    const stall: Stall = createStallSimpleResponse.stall;
    return stall;
  }
}
