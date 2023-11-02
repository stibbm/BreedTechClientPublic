import { Component, OnInit } from '@angular/core';
import {HorseLocationService} from '../../../services/horse-location.service';
import {HorseService} from '../../../services/horses.service';
import {GetHorsesV2Response, HorseV2} from '../../../model/Horse';
import {NavigationExtras, Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-horse-cards',
  templateUrl: './horse-cards.page.html',
  styleUrls: ['./horse-cards.page.scss'],
})
export class HorseCardsPage implements OnInit {

  horsesV2List: HorseV2[];
  isHorsesV2ListLoaded = false;

  constructor(
    private horseService: HorseService,
    private horseLocationService: HorseLocationService,
    private router: Router,
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewDidLoad();
  }

  async ionViewDidLoad() {
    this.isHorsesV2ListLoaded = false;
    const getHorsesV2Response: GetHorsesV2Response = await this.horseService.getHorsesV2();
    const horsesV2List: HorseV2[] = getHorsesV2Response.horsesV2List;
    this.horsesV2List = horsesV2List;
    this.isHorsesV2ListLoaded = true;
  }

  async goToHorseView(horse: HorseV2) {
    const horseId = '' + horse.horseId;
    const horseJSON = JSON.stringify(horse);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        horseId,
        horseV2JSON: horseJSON
      }
    };
    await this.router.navigate(['horse-details'], navigationExtras);
  }

}
