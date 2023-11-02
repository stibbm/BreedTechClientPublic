import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GetAllStallsOccupancyResponse, Stall, StallOccupancy} from "../../../model/Stall";
import {StallService} from '../../../services/stalls.service';
import {LoaderService} from "../../../services/loader.service";

@Component({
  selector: 'app-stall-selector',
  templateUrl: './stall-selector.component.html',
  styleUrls: ['./stall-selector.component.scss'],
})
export class StallSelectorComponent implements OnInit {

  @Output() stallSelectorEventEmitter = new EventEmitter<Stall>();

  searchTerm = '';
  stallsOccupanciesList: StallOccupancy[] = [];
  stallOccupancy: StallOccupancy;

  isSelectionCompleted = false;

  isStallsOccupanciesListLoaded = false;

  constructor(
    private stallService: StallService,
    private loaderService: LoaderService
  ) { }

  async ngOnInit() {
    await this.ionViewDidLoad();
  }

  async ionViewDidLoad() {
    await this.loaderService.autoLoader();
    console.log('ionViewDidLoad: StallSelector');
    await this.loadStallsList();
    await this.loaderService.closeLoader();
  }

  async loadStallsList() {
    this.isStallsOccupanciesListLoaded = false;
    console.log('load stalls list');
    const getAllStallsOccupancyResponse: GetAllStallsOccupancyResponse =
      await this.stallService.getAllStallOccupancy();
    this.stallsOccupanciesList = getAllStallsOccupancyResponse.stallOccupanciesList;
    this.isStallsOccupanciesListLoaded = true;
  }

  async onStallOccupancySelected(stallOccupancy: StallOccupancy) {
    this.stallOccupancy = stallOccupancy;
    this.isSelectionCompleted = true;
  }

  async resetSelector() {
    console.log('reset stalls selector');
    this.stallOccupancy = null;
    this.searchTerm = null;
    this.isSelectionCompleted = false;
    await this.loadStallsList();
  }

}
