import { Component, OnInit } from '@angular/core';
import {HorseServiceWrapperService} from '../../../wrapper/horse-service-wrapper.service';
import {AuthService} from '../../../services/auth.service';
import {HorseV2} from '../../../model/Horse';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-horse-cards-test',
  templateUrl: './horse-cards-test.page.html',
  styleUrls: ['./horse-cards-test.page.scss'],
})
export class HorseCardsTestPage implements OnInit {

  horsesList: HorseV2[] = [];
  isHorsesListLoaded = false;

  constructor(
    private horseServiceWrapperService: HorseServiceWrapperService,
    private authService: AuthService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.authService.verifyUserLoggedIn();
    await this.loadHorsesList();
  }

  async loadHorsesList() {
    this.isHorsesListLoaded = false;
    const horsesList: HorseV2[] = await this.horseServiceWrapperService.getHorsesV2();
    this.horsesList = horsesList;
    this.isHorsesListLoaded = true;
  }

  async goToHorseDetailsPage(horseV2: HorseV2) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        horseId: horseV2.horseId,
        horseV2JSON: JSON.stringify(horseV2)
      }
    };
    await this.router.navigate(['horse-details'], navigationExtras);
  }
}
