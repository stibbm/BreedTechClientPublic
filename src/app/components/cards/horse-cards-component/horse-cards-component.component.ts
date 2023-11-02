import {Component, Input, OnInit} from '@angular/core';
import {Horse, HorseV2} from '../../../model/Horse';
import {AuthService} from '../../../services/auth.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-horse-cards-component',
  templateUrl: './horse-cards-component.component.html',
  styleUrls: ['./horse-cards-component.component.scss'],
})
export class HorseCardsComponentComponent implements OnInit {

  @Input() horsesV2sList: HorseV2[];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
  }

  async goToHorseView(horse: HorseV2) {
    console.log('goToHorseView');
    console.log(horse);
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
