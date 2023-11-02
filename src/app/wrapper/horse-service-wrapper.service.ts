import { Injectable } from '@angular/core';
import {HorseService} from '../services/horses.service';
import {
  CreateHorseRequest,
  CreateHorseResponse, GetAllHorsesResponse, GetHorsesByOwnerIdRequest,
  GetHorsesV2Response, GetHorsesWithLocationResponse,
  Horse,
  HorseV2,
  HorseWithLocation
} from "../model/Horse";

@Injectable({
  providedIn: 'root'
})
export class HorseServiceWrapperService {

  constructor(
    private horseService: HorseService
  ) {}

  async getHorsesV2(): Promise<HorseV2[]> {
    const getHorsesV2Response: GetHorsesV2Response =
      await this.horseService.getHorsesV2();
    const horsesList: HorseV2[] = getHorsesV2Response.horsesV2List;
    return horsesList;
  }

  async createHorse(
    name: string,
    registrationNumber: string,
    isStallion: boolean,
    dam: string,
    sire: string,
    damSire: string,
    ownerUserId: number
  ): Promise<Horse> {
    const createHorseRequest: CreateHorseRequest = {
      name,
      registrationNumber,
      isStallion,
      dam,
      sire,
      damSire,
      ownerUserId
    };
    const createHorseResponse: CreateHorseResponse =
      await this.horseService.createHorse(createHorseRequest);
    const horse: Horse = createHorseResponse.horse;
    return horse;
  }

  async getHorsesWithLocation():
    Promise<HorseWithLocation[]>
  {
    const getHorsesWithLocationResponse: GetHorsesWithLocationResponse =
      await this.horseService.getHorsesWithLocation();
    const horsesWithLocationList: HorseWithLocation[] = getHorsesWithLocationResponse.horsesWithLocationList;
    return horsesWithLocationList;
  }

  async getHorsesByOwnerId(
    ownerId: number
  ): Promise<Horse[]> {
    const getHorsesByOwnerIdRequest: GetHorsesByOwnerIdRequest = {
      ownerId
    };
    const getHorsesByOwnerIdResponse =
      await this.horseService.getHorsesByOwnerId(getHorsesByOwnerIdRequest);
    const horsesList: Horse[] = getHorsesByOwnerIdResponse.horsesList;
    return horsesList;
  }

  async getAllHorses(): Promise<Horse[]>
  {
    const getAllHorsesResponse: GetAllHorsesResponse = await this.horseService.getAllHorses();
    const horsesList: Horse[] = getAllHorsesResponse.horsesList;
    return horsesList;
  }
}
