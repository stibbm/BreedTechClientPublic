import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from 'src/app/model/User';
import { HorseService } from 'src/app/services/horses.service';
import {GetHorsesByOwnerIdRequest, GetHorsesByOwnerIdResponse, Horse} from '../../../model/Horse';

@Component({
  selector: 'app-horse-selector-by-user-id',
  templateUrl: './horse-selector-by-user-id.component.html',
  styleUrls: ['./horse-selector-by-user-id.component.scss'],
})
export class HorseSelectorByUserIdComponent implements OnInit {

  @Output() horseSelectorEventEmitter = new EventEmitter<Horse>();

  user: User;

  searchTerm = '';
  horsesList: Horse[] = [];
  horse: Horse;
  isSelectionCompleted = false;

  constructor(private horseService: HorseService) { }

  async ngOnInit() {
    if (this.user != null) {
      await this.ionViewDidLoad();
    }
  }

  async ionViewDidLoad() {
    if (this.user != null) {
      console.log('ionViewDidLoad: HorseSelectorByUserId');
      await this.loadHorsesList();
    }
  }

  async loadHorsesList() {
    console.log('load horses list');
    const getHorsesByOwnerIdRequest: GetHorsesByOwnerIdRequest = {
      ownerId: this.user.id
    };
    const getHorsesByOwnerIdResponse: GetHorsesByOwnerIdResponse =
      await this.horseService.getHorsesByOwnerId(getHorsesByOwnerIdRequest);
    this.horsesList = getHorsesByOwnerIdResponse.horsesList;
  }

  async onHorseSelected(horse: Horse) {
    this.horse = horse;
    this.isSelectionCompleted = true;
    this.horseSelectorEventEmitter.emit(horse);
  }

  async resetSelector() {
    console.log('reset horse by user id selector');
    this.horse = null;
    this.user = null;
    this.searchTerm = null;
    this.isSelectionCompleted = false;
    await this.loadHorsesList();
  }


}
