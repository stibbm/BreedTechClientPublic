import { Component, OnInit } from '@angular/core';
import {StallService} from '../../../services/stalls.service';
import {
  GetAllStallsOccupancyResponse,
  GetAllStallsResponse,
  Stall,
  StallOccupancy,
  StallOccupancyDisplayable
} from '../../../model/Stall';
import {
  createStallOccupancyDisplayables
} from '../../../actions/StallActions';
import {NavigationExtras, Router} from '@angular/router';
import {LoaderService} from '../../../services/loader.service';
import {KeyValueStorageService} from '../../../services/key-value-storage.service';
import {USER_LOGGED_IN_KEY} from '../../../constants/StorageKeys';
import {User} from '../../../model/User';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-stalls',
  templateUrl: './stalls.page.html',
  styleUrls: ['./stalls.page.scss'],
})
export class StallsPage implements OnInit {

  columns = [
    {name: 'StallId'},
    {name: 'Name'},
    {name: 'HorsesList'},
    {name: 'Capacity'},
    {name: 'Occupants'},
    {name: 'Description'},
    {name: 'Notes'},
    {name: 'CompanyId'},
  ];

  displayColumns = [
    'stallId',
    'name',
    'horsesList',
    'capacity',
    'occupants',
    'description',
    'notes',
    'companyId',
    'actions'
  ];

  stallOccupanciesList: StallOccupancy[];
  stallOccupanciesListDisplayable: StallOccupancyDisplayable[];

  userLoggedIn: User;
  userLoggedInEmailAddress: string;

  userLoggedInValueLoaded = false;
  userLoggedInEmailAddressValueLoaded = false;

  constructor(
    private stallService: StallService,
    private router: Router,
    private loaderService: LoaderService,
    private keyValueStorageService: KeyValueStorageService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }

  async loadAccountInfoBanner() {
    const userLoggedIn: User =
      await this.keyValueStorageService.getItem(USER_LOGGED_IN_KEY);
    this.userLoggedIn = userLoggedIn;
    this.userLoggedInEmailAddress = userLoggedIn.emailAddress;
    this.userLoggedInValueLoaded = true;
    this.userLoggedInEmailAddressValueLoaded = true;
  }

  async ionViewWillEnter() {
    await this.loaderService.autoLoader();
    await this.authService.verifyUserLoggedIn();
    await this.loadAccountInfoBanner();
    const getAllStallsOccupancyResponse: GetAllStallsOccupancyResponse =
      await this.stallService.getAllStallOccupancy();
    this.stallOccupanciesList = getAllStallsOccupancyResponse.stallOccupanciesList;
    const stallOccupanciesDisplayableList =
      createStallOccupancyDisplayables(this.stallOccupanciesList);
    this.stallOccupanciesListDisplayable = stallOccupanciesDisplayableList;
    await this.loaderService.closeLoader();
  }

  async onCreateStallButtonPressed() {
    await this.loaderService.simpleLoader();
    await this.router.navigate(['create-stall']);
    await this.loaderService.closeLoader();
  }

  async onMoveHorseButtonPressed() {
    await this.loaderService.simpleLoader();
    await this.router.navigate(['move-horse']);
    await this.loaderService.closeLoader();
  }

  async onAddHorseToStallButtonPressed(stallOccupancyDisplayable: StallOccupancyDisplayable) {
    await this.loaderService.autoLoader();
    const navigationExtras: NavigationExtras = {
      queryParams: {
        stallOccupancyDisplayable,
        stallId: stallOccupancyDisplayable.stallId
      }
    };
    await this.router.navigate(['move-horse-from-stalls-page'], navigationExtras);
    await this.loaderService.closeLoader();
  }

  async goToStallDetailsPage(stallOccupancyDisplayable: StallOccupancyDisplayable) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        stallOccupancyDisplayableJSON: JSON.stringify(stallOccupancyDisplayable)
      }
    };
    await this.router.navigate(['stall-details'], navigationExtras);
  }
}
