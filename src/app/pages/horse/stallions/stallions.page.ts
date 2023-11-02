import { Component, OnInit } from '@angular/core';
import {HorseService} from '../../../services/horses.service';
import {Router} from '@angular/router';
import {LoaderService} from '../../../services/loader.service';
import {GetStallionsResponse, Stallion} from '../../../model/Horse';
import {AuthService} from '../../../services/auth.service';

// also need a button which can be pressed to show collection history

type StallionView = {
  horseName: string;
  stallName: string;
  lastCollectionDateString: string;
  nextCollectionDateString: string;
};

@Component({
  selector: 'app-stallions',
  templateUrl: './stallions.page.html',
  styleUrls: ['./stallions.page.scss'],
})
export class StallionsPage implements OnInit {

  displayColumns = [
    'horseName',
    'stallName',
    'lastCollectionDateString',
    'nextCollectionDateString',
    'actions'
  ];

  stallionsList: Stallion[];
  stallionViewsList: StallionView[];

  constructor(
    private horseService: HorseService,
    private router: Router,
    private loaderService: LoaderService,
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    console.log('ngOnInit');
  }

  async ionViewWillEnter() {
    await this.loaderService.autoLoader();
    await this.authService.verifyUserLoggedIn();
    console.log('ionViewWillEnter: Stallions Page');
    const getStallionsResponse: GetStallionsResponse =
      await this.horseService.getStallions();
    this.stallionsList = getStallionsResponse.stallionsList;
    await this.generateElementsList(this.stallionsList);
    console.log('stallionsList');
    console.log(this.stallionsList);
    await this.loaderService.closeLoader();
  }

  async generateElementsList(stallionsList: Stallion[]) {
    const stallionViewsList: StallionView[] = [];
    console.log('generateElementsList');
    for (var i=0;i<stallionsList.length;i++) {
      const stallion: Stallion = stallionsList[i];
      const stallionView: StallionView = {
        stallName: stallion.horseWithLocation.stallName,
        horseName: stallion.horseWithLocation.horseName,
        lastCollectionDateString: stallion.lastCollectionDateString,
        nextCollectionDateString: stallion.nextCollectionDateString
      };
      stallionViewsList.push(stallionView);
    };
    this.stallionViewsList = stallionViewsList;
    console.log('stallionViewsList');
    console.log(this.stallionViewsList);
  }

  async onCreateStallionButtonPressed() {
    console.log('onCreateStallionButtonPressed');
  }

  async onViewCollectionHistoryButtonPressed(stallionView: StallionView) {
    console.log('onViewCollectionHistoryButtonPressed');
    console.log(stallionView);

  }

  async onCreateSemenCollectionButtonPressed() {
    console.log('onCreateSemenCollectionLogButtonPressed');
    await this.router.navigate(['create-semen-collection-log']);
  }
}
