import {Component, OnInit, ViewChild} from '@angular/core';
import {ChargeService} from '../../../services/charge.service';
import {Charge, GetChargesResponse} from '../../../model/Charge';
import {UserSelectorComponent} from "../../../components/selectors/user-selector/user-selector.component";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-charges',
  templateUrl: './charges.page.html',
  styleUrls: ['./charges.page.scss'],
})
export class ChargesPage implements OnInit {

  @ViewChild(UserSelectorComponent, {static: false}) userSelectorComponent;

  chargesList: Charge[];

  constructor(
    private chargeService: ChargeService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    console.log('ngOnInit');
    await this.authService.verifyUserLoggedIn();
  }

  async ionViewWillEnter() {
    console.log('ionViewWillEnter');
    await this.loadChargesList();
  }

  async loadChargesList() {
    const getChargesResponse: GetChargesResponse =
      await this.chargeService.getCharges();
    const chargesList: Charge[] = getChargesResponse.chargesList;
    this.chargesList = chargesList;
  }

  async loadChargesListByUserId(chargeId: number) {

  }
}


