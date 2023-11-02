import {Component, OnInit, ViewChild} from '@angular/core';
import {ChargeService} from '../../../services/charge.service';
import {HorseSelectorByUserIdComponent} from '../../selectors/horse-selector-by-user-id/horse-selector-by-user-id.component';
import {HorseSelectorComponent} from '../../selectors/horse-selector/horse-selector.component';
import {Horse} from '../../../model/Horse';
import {UserSelectorComponent} from '../../selectors/user-selector/user-selector.component';

@Component({
  selector: 'app-create-charge-input',
  templateUrl: './create-charge-input.component.html',
  styleUrls: ['./create-charge-input.component.css']
})
export class CreateChargeInputComponent implements OnInit {

  @ViewChild(UserSelectorComponent, {static: false}) userSelectorComponent: UserSelectorComponent;
  @ViewChild(HorseSelectorComponent, {static: false}) horseSelectorComponent: HorseSelectorComponent;

  amountCents: number;

  constructor(
    private chargeService: ChargeService
  ) { }

  async ngOnInit() {

  }

  async getHorseId(): Promise<number> {
    const horseId = this.horseSelectorComponent.horse.id;
    return horseId;
  }

  async getChargeAmount(): Promise<number> {
    return this.amountCents;
  }

}
