import {Component, OnInit, ViewChild} from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { UserSelectorRadioComponent } from '../../selectors/user-selector-radio/user-selector-radio.component';
import {UserSelectorComponent} from '../../selectors/user-selector/user-selector.component';

@Component({
  selector: 'app-create-horse-input',
  templateUrl: './create-horse-input.component.html',
  styleUrls: ['./create-horse-input.component.scss'],
})
export class CreateHorseInputComponent implements OnInit {

  @ViewChild(UserSelectorComponent, {static: false}) userSelectorComponent;
  @ViewChild(UserSelectorRadioComponent, {static: false}) userSelectorRadioComponent;

  name: string;
  registrationNumber: string;
  isStallion: boolean;
  horseTypeSelection: string;
  dam: string;
  sire: string;
  damSire: string;
  ownerUserId: number;
  stallionContractFormData: FormData;
  stallionContractString: string;
  stallionContractBlob: Blob;

  horseTypesList = ['Stallion', 'Mare'];
  horseType: string;

  constructor() {}

  async ngOnInit() {}

  async stallionContractChange(event) {
    console.log('stallion contract change');
    const file: File = event.target.files[0];

    const fileSize: number = file.size;

    var blob: Blob = file.slice(0, fileSize);

    this.stallionContractBlob = blob;

    const text: string = await file.text();
    console.log('text = ');
    console.log(text);

    this.stallionContractString = text;

    let formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('filePath', file.name);

    this.stallionContractFormData = formData;

    console.log('this.stallionContractFormData');
  }

  async getIsStallion(): Promise<boolean> {
    const horseTypeSelection: string = this.horseTypeSelection;
    if (horseTypeSelection === 'stallion') {
      return true;
    }
    else {
      return false;
    }
  }

  public async getOwnerUserId(): Promise<number> {
    //const ownerUserId: number = await this.userSelectorComponent.getOwnerUserId();
    const ownerUserId: number = this.userSelectorRadioComponent.user.id;
    return ownerUserId;
  }

  async reset() {
    this.name = null;
    this.registrationNumber = null;
    this.isStallion = null;
    this.dam = null;
    this.sire = null;
    this.damSire = null;
    this.ownerUserId = null;
  }

}
