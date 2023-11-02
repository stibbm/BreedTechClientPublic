import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateChargeInputComponent} from "../../../components/inputs/create-charge-input/create-charge-input.component";
import {ChargeService} from "../../../services/charge.service";
import {CreateChargeByHorseIdRequest, CreateChargeByHorseIdResponse, CreateChargeRequest} from "../../../model/Charge";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-create-charge',
  templateUrl: './create-charge.page.html',
  styleUrls: ['./create-charge.page.scss'],
})
export class CreateChargePage implements OnInit {

  @ViewChild(CreateChargeInputComponent, {static: false}) createChargeInputComponent: CreateChargeInputComponent;

  constructor(
    private chargeService: ChargeService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
  }

  async createChargeByHorseIdButtonPressed() {
    const createChargeByHorseIdRequest: CreateChargeByHorseIdRequest = {
      horseId: await this.createChargeInputComponent.getHorseId(),
      amountCents: await this.createChargeInputComponent.getChargeAmount()
    };
    const createChargeByHorseIdResponse: CreateChargeByHorseIdResponse = await this.chargeService.createChargeByHorseId(createChargeByHorseIdRequest);
    return createChargeByHorseIdResponse;
  }

}
