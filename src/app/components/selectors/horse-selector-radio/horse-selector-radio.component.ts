import { Component, OnInit } from '@angular/core';
import {GetAllHorsesResponse, GetHorsesV2Response, Horse, HorseV2} from '../../../model/Horse';
import {HorseService} from '../../../services/horses.service';

@Component({
  selector: 'app-horse-selector-radio',
  templateUrl: './horse-selector-radio.component.html',
  styleUrls: ['./horse-selector-radio.component.scss'],
})
export class HorseSelectorRadioComponent implements OnInit {

  horsesList: Horse[];
  isHorsesListLoaded = false;
  horse: Horse;

  horseV2sList: HorseV2[];
  isHorseV2sListLoaded = false;
  horseV2: HorseV2;

  constructor(
    private horseService: HorseService
  ) { }

  async ngOnInit() {
    await this.ionViewWillEnter();
  }

  async getHorse(): Promise<Horse> {
    return this.horse;
  }

  async getHorseV2(): Promise<HorseV2> {
    return this.horseV2;
  }

  async ionViewWillEnter() {
    await this.loadHorsesV2();
  }

  async loadHorsesV2() {
    const getHorsesV2Response: GetHorsesV2Response =
      await this.horseService.getHorsesV2();
    const horseV2sList: HorseV2[] = getHorsesV2Response.horsesV2List;
    this.horseV2sList = horseV2sList;
    this.isHorseV2sListLoaded = true;
  }

  async loadHorses() {
    this.isHorsesListLoaded = false;
    const horsesList: Horse[] = await this.getHorses();
    this.horsesList = horsesList;
    this.isHorsesListLoaded = true;
  }

  async getHorses(): Promise<Horse[]> {
    const getAllHorsesResponse: GetAllHorsesResponse =
      await this.horseService.getAllHorses();
    const horsesList: Horse[] = getAllHorsesResponse.horsesList;
    return horsesList;
  }

}
