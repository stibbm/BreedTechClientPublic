import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GetAllHorsesResponse, Horse} from '../../../model/Horse';
import {HorseService} from '../../../services/horses.service';
import {getHorsesWithNamesMatchingQuery} from '../../../actions/HorseActions';

@Component({
  selector: 'app-horse-selector',
  templateUrl: './horse-selector.component.html',
  styleUrls: ['./horse-selector.component.scss'],
})
export class HorseSelectorComponent implements OnInit {

  // @ts-ignore
  @Output() horseSelectedEventEmitter = new EventEmitter<Horse>();

  searchTerm = '';
  horsesList: Horse[] = [];
  horse: Horse;

  isSelectionCompleted = false;

  constructor(
    private horseService: HorseService
  ) { }

  async ngOnInit() {
    await this.ionViewDidLoad();
  }

  async ionViewDidLoad() {
    console.log('ionViewDidLoad: HorseSelector');
    await this.loadHorsesList();
  }

  async onHorseSelected(horse: Horse) {
    console.log('HorseSelector emitting horse:');
    this.horse = horse;
    this.isSelectionCompleted = true;
    this.horseSelectedEventEmitter.emit(horse);
  }

  async loadHorsesList() {
    console.log('loadHorsesList');
    const getAllHorsesResponse: GetAllHorsesResponse = await this.horseService.getAllHorses();
    const horsesList: Horse[] = getAllHorsesResponse.horsesList;
    const filteredHorsesList: Horse[] = getHorsesWithNamesMatchingQuery(horsesList, this.searchTerm);
    this.horsesList = filteredHorsesList;
    console.log('horsesList');
    console.log(this.horsesList);
  }

  public async getHorse() {
    return this.horse;
  }

  public async getHorseId() {
    return this.horse.id;
  }

  public async getIsHorseSelectionComplete() {
    return this.isSelectionCompleted;
  }

  async resetSelector() {
    console.log('Reset Horse Selector');
    this.horse = null;
    this.horsesList = null;
    this.searchTerm = null;
    this.isSelectionCompleted = false;
    await this.loadHorsesList();
  }

}
