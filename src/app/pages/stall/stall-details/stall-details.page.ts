import { Component, OnInit } from '@angular/core';
import {StallService} from '../../../services/stalls.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Stall, StallOccupancy, StallOccupancyDisplayable} from '../../../model/Stall';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-stall-details',
  templateUrl: './stall-details.page.html',
  styleUrls: ['./stall-details.page.scss'],
})
export class StallDetailsPage implements OnInit {

  isStallOccupancyDisplayableLoaded = false;
  stallOccupancyDisplayable: StallOccupancyDisplayable;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private stallService: StallService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    await this.ionViewWillEnter();
  }

  async ionViewWillEnter() {
    await this.loadStallOccupancyDisplayable();
  }

  async loadStallOccupancyDisplayable() {
    this.isStallOccupancyDisplayableLoaded = false;
    await this.activatedRoute.queryParams
      .subscribe(params => {
        this.stallOccupancyDisplayable = JSON.parse(params.stallOccupancyDisplayableJSON);
        this.isStallOccupancyDisplayableLoaded = true;
      });
  }

  async onMoveHorseToStallButtonPressed() {
    await this.router.navigate(['move-horse']);
  }
}
