import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorseV2 } from 'src/app/model/Horse';
import { AuthService } from 'src/app/services/auth.service';
import { HorseServiceWrapperService } from 'src/app/wrapper/horse-service-wrapper.service';


@Component({
  selector: 'app-horse-cards2',
  templateUrl: './horse-cards2.page.html',
  styleUrls: ['./horse-cards2.page.scss'],
})
export class HorseCards2Page implements OnInit {

  horsesList: HorseV2[];
  isHorsesListLoaded = false;

  constructor(
    private horseServiceWrapperService: HorseServiceWrapperService,
    private authService: AuthService,
    private router: Router,
    //private horseLocationServiceWrapperService: HorseLocationServiceWrapperService,
  ) { }

  async ngOnInit() {
    console.log('ngOnInit');
    await this.loadHorses();
  }

  async ionViewWillEnter() {
    await this.loadHorses();
  }

  async loadHorses() {
    this.isHorsesListLoaded = false;
    const horsesList: HorseV2[] =  await this.horseServiceWrapperService.getHorsesV2();
    this.horsesList = horsesList;
    this.isHorsesListLoaded = true;
  }

}
