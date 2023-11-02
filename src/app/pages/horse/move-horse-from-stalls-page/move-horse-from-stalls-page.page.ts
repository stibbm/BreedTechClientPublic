import {Component, OnInit, ViewChild} from '@angular/core';
import {HorseLocationService} from '../../../services/horse-location.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoaderService} from '../../../services/loader.service';
import {HorseSelectorComponent} from '../../../components/selectors/horse-selector/horse-selector.component';
import {StallOccupancyDisplayable} from '../../../model/Stall';
import { Horse } from '../../../model/Horse';
import {MoveHorseRequest, MoveHorseResponse} from '../../../model/HorseLocation';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-move-horse-from-stalls-page',
  templateUrl: './move-horse-from-stalls-page.page.html',
  styleUrls: ['./move-horse-from-stalls-page.page.scss'],
})
export class MoveHorseFromStallsPagePage implements OnInit {

  @ViewChild(HorseSelectorComponent, {static: false}) horseSelectorComponent: HorseSelectorComponent;

  stallId: number;
  stallOccupancyDisplayable: StallOccupancyDisplayable;

  constructor(
    private horseLocationService: HorseLocationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.activatedRoute.queryParams.subscribe(
      params => {
        this.stallId = params.stallId;
        this.stallOccupancyDisplayable = params.stallOccupancyDisplayable;
      }
    );
  }

  /*async onMoveHorseButtonPressed() {
    const horse: Horse = await this.horseSelectorComponent.getHorse();
    const createHorseLocationRequest: CreateHorseLocationRequest = {
      horseId: await this.horseSelectorComponent.getHorseId(),
      stallId: this.stallId
    };
    console.log(createHorseLocationRequest);
    const createHorseLocationResponse: CreateHorseLocationResponse =
    await this.horseLocationService.createHorseLocation(
            createHorseLocationRequest
    );
    console.log(createHorseLocationResponse);
    alert('horse moved');
    await this.router.navigate(['stalls']);
  }*/

  async onMoveHorseButtonPressed() {
    try {
      const horse: Horse = await this.horseSelectorComponent.getHorse();
      const moveHorseRequest: MoveHorseRequest = {
        horseId: await this.horseSelectorComponent.getHorseId(),
        destinationStallId: this.stallId
      };
      const moveHorseResponse: MoveHorseResponse = await this.horseLocationService.moveHorse(moveHorseRequest);
      console.log('moveHorseResponse');
      console.log(moveHorseResponse);
      alert('Horse moved');
      await this.router.navigate(['stalls']);
    } catch (e) {
      console.log(e);
      alert(e.error);
    }
  }

}




























