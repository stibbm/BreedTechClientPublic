import {Component, OnInit, ViewChild} from '@angular/core';
import {
  GetAllHorsesResponse,
  GetHorsesV2Response,
  GetHorsesWithLocationResponse,
  Horse,
  HorseV2,
  HorseWithLocation
} from '../../../model/Horse';
import {HorseSelectorComponent} from '../../../components/selectors/horse-selector/horse-selector.component';
import {HorseService} from '../../../services/horses.service';
import {NavigationExtras, Router} from '@angular/router';
import {LoaderService} from '../../../services/loader.service';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {BreedingContractService} from '../../../services/breeding-contract.service';
import {
  GetBreedingContractPathsByHorseIdResponse,
  GetBreedingContractsByHorseIdRequest,
  GetBreedingContractsByHorseIdResponse,
  HorseBreedingContractPaths
} from '../../../model/BreedingContract';
import { AuthService } from '../../../services/auth.service';
import {FileService} from '../../../services/file.service';
import {File, GetFileRequest, GetFilesByParentRequest, GetFilesByParentResponse} from '../../../model/File';


@Component({
  selector: 'app-horses',
  templateUrl: './horses.page.html',
  styleUrls: ['./horses.page.scss'],
})
export class HorsesPage implements OnInit {

  @ViewChild(MatSort) sort = new MatSort();

  columns = [
    {name: 'HorseId'},
    {name: 'HorseName'},
    {name: 'RegistrationNumber'},
    {name: 'IsStallion'},
    {name: 'Dam'},
    {name: 'Sire'},
    {name: 'DamSire'},
    {name: 'OwnerUserId'},
    {name: 'StallId'},
    {name: 'StallName'},
  ];

  dataSource;

  displayColumns = [
    'horseId',
    'horseName',
    'registrationNumber',
    'isStallion',
    'dam',
    'sire',
    'damSire',
    'ownerUserId',
    'stallId',
    'stallName'
  ];

  displayColumnsV2 = [
    'horseName',
    'horseRegistrationNumber',
    'isStallion',
    'damName',
    'sireName',
    'damSireName',
    'ownerFirstAndLastName',
    'stallName',
    'actions'
  ];

  horsesList: Horse[] = [];
  isHorsesListLoaded = false;

  horsesV2List: HorseV2[] = [];
  isHorsesV2ListLoaded = false;

  unfilteredHorsesV2List: HorseV2[] = [];

  horsesWithLocationList: HorseWithLocation[] = [];
  isHorsesWithLocationListLoaded = false;

  sortedHorseLocations: HorseWithLocation[] = [];

  breedingContractUrlPaths: string[] = [];
  horseBreedingContractPathsList: HorseBreedingContractPaths[] = [];
  isHorseBreedingContractPathsListLoaded = false;

  imageSource: string;
  isImageSourceLoaded = false;

  imageSourcesList: string[] = [];
  isImageSourcesListLoaded = false;

  nameInputString = '';

  constructor(
    private horseService: HorseService,
    private router: Router,
    private loaderService: LoaderService,
    private breedingContractService: BreedingContractService,
    private authService: AuthService,
    private fileService: FileService
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
  }

  async onViewActionsHistoryButtonPressed(element) {
    console.log(element.horseId);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        horseId: element.horseId
      }
    };
    console.log('navigationExtras');
    console.log(navigationExtras);
    await this.router.navigate(['horse-actions-history'], navigationExtras);
  }

  async sortData() {
    const data = this.horsesWithLocationList.sort();
    this.sortedHorseLocations = data;
  }

  async ionViewWillEnter() {
    await this.authService.verifyUserLoggedIn();
    await this.loaderService.autoLoader();
    await this.loadHorsesV2();
    const getHorsesWithLocationResponse: GetHorsesWithLocationResponse =
      await this.horseService.getHorsesWithLocation();
    this.horsesWithLocationList = getHorsesWithLocationResponse
      .horsesWithLocationList;
    this.isHorsesWithLocationListLoaded = true;
    await this.loadBreedingContractUrPathsListFromHorsesWithLocationsList();
    await this.loaderService.dismissLoader();
  }

  async loadBreedingContractUrPathsListFromHorsesWithLocationsList() {
    const horseIdsList: number[] = [];
    for (var i=0;i<this.horsesWithLocationList.length;i++) {
      const horseWithLocation: HorseWithLocation = this.horsesWithLocationList[i];
      horseIdsList.push(horseWithLocation.horseId);
    }
    await this.loadBreedingContractUrlPathsList(horseIdsList);
  }

  async loadBreedingContractUrlPathsList(horseIdsList: number[]) {
    for (var i=0;i<horseIdsList.length;i++) {
      const horseId: number = horseIdsList[i];
      await this.loadBreedingContractUrlPaths(horseId);
    }
    this.isHorseBreedingContractPathsListLoaded = true;
  }

  async loadBreedingContractUrlPaths(horseId: number) {
    const getBreedingContractPathsByHorseIdRequest: GetBreedingContractsByHorseIdRequest = {
      horseId
    };
    const getBreedingContractPathsByHorseIdResponse: GetBreedingContractPathsByHorseIdResponse =
      await this.breedingContractService.getBreedingContractPathsByHorseId(getBreedingContractPathsByHorseIdRequest);
    const horseBreedingContractPath: HorseBreedingContractPaths = {
      horseId,
      paths: getBreedingContractPathsByHorseIdResponse.breedingContractPathsList,
    };
    this.horseBreedingContractPathsList.push(horseBreedingContractPath);
  }

  async onAddHorseButtonPressed() {
    await this.loaderService.simpleLoader();
    await this.router.navigate(['/create-horse']);
    await this.loaderService.closeLoader();
  }

  async onMoveHorseButtonPressed() {
    await this.loaderService.simpleLoader();
    await this.router.navigate(['/move-horse']);
    await this.loaderService.closeLoader();
  }

  async loadHorsesV2() {
    const getHorsesV2Response: GetHorsesV2Response = await this.horseService.getHorsesV2();
    console.log('getHorsesV2Response');
    console.log(getHorsesV2Response);
    const horsesV2List: HorseV2[] = getHorsesV2Response.horsesV2List;
    this.horsesV2List = horsesV2List;
    this.unfilteredHorsesV2List = horsesV2List;
    this.isHorsesV2ListLoaded = true;
    console.log('getHorsesV2Response');
    console.log(getHorsesV2Response);
  }

  async onViewHorseDetails(horseV2) {
    console.log('onViewHorseDetailsButtonPressed');
    console.log(horseV2);
    const horseId: number = horseV2.horseId;
    const getBreedingContractsByHorseIdRequest: GetBreedingContractsByHorseIdRequest = {
      horseId
    };
    const getBreedingContractsByHorseIdResponse: GetBreedingContractsByHorseIdResponse =
      await this.breedingContractService.getBreedingContractsByHorseId(getBreedingContractsByHorseIdRequest);
    console.log('getBreedingContractsByHorseIdRequest');
    console.log(getBreedingContractsByHorseIdResponse);
    const filePathsList: string[] = getBreedingContractsByHorseIdResponse.filePathsList;
    let filePath: string = filePathsList[0];
    this.imageSourcesList = filePathsList;
    this.isImageSourcesListLoaded = true;
    console.log('filePath');
    console.log(filePath);
    filePath = await this.breedingContractService.getContractImageUrl(filePath);
    this.imageSource = filePath;
    this.isImageSourceLoaded = true;
  }

  async onDownloadButtonPressed(element) {
    const horseId: number = element.horseId;
    const getFilesByParentRequest: GetFilesByParentRequest = {
      parentId: horseId,
      parentType: 'horse'
    };
    const getFilesByParentResponse: GetFilesByParentResponse =
      await this.fileService.getFilesByParent(horseId, 'horse');
    console.log('getFilesByParentResponse');
    console.log(getFilesByParentResponse);
    const filesList: File[] = getFilesByParentResponse.filesList;
    const filesListLength: number = filesList.length;
    console.log(filesListLength);
    for (var i=0;i<filesListLength;i++) {
      console.log(i);
      const file: File = filesList[i];
      const filePath: string = file.s3FilePath;
      const fullFilePath: string = await this.fileService.getDownloadUrl(filePath);
      await this.fileService.downloadFileWithFullPath(fullFilePath, filePath);
    }
  }

  async onAddStallionContractButtonPressed(element) {
    console.log('onAddStallionContractButtonPressed');
    const horseId: number = element.horseId;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        horseId,
        horseV2JSON: JSON.stringify(element),
      }
    };
    await this.router.navigate(['/create-stallion-contract'], navigationExtras);
  }

  async onSearchByNameButtonPressed() {
    console.log('onSearchByNameButtonPressed');
    const nameInputString = this.nameInputString;
    await this.setFilteredList(nameInputString);
  }

  async onClearButtonPressed() {
    console.log('onClearButtonPressed');
    this.horsesV2List = this.unfilteredHorsesV2List;
    console.log('reset list');
  }

  async setFilteredList(nameInputString: string) {
    const nameInputStringTokens: string[] = nameInputString.split(' ');
    const filteredHorseV2sList: HorseV2[] = [];
    for (var i=0;i<this.unfilteredHorsesV2List.length;i++) {
      const horseV2: HorseV2 = this.unfilteredHorsesV2List[i];
      const horseName: string = horseV2.horseName;
      const horseNameLowerCase: string = horseName.toLowerCase();
      var matchFound = false;
      for (var j=0;j<nameInputStringTokens.length;j++) {
        const nameInputStringToken: string = nameInputStringTokens[j];
        const nameInputStringTokenLowerCase: string = nameInputStringToken.toLowerCase();
        console.log('nameInputStringToken');
        console.log(nameInputStringToken);
        const nameIncludesToken: boolean = await this.isTokenInText(horseNameLowerCase, nameInputStringTokenLowerCase);
        if (nameIncludesToken === true) {
          matchFound = true;
          break;
        }
      }
      if (matchFound === true) {
        filteredHorseV2sList.push(horseV2);
      }
      this.horsesV2List = filteredHorseV2sList;
    }
  }

  async isTokenInText(
    text: string,
    token: string
  ): Promise<boolean> {
    const result: boolean = text.includes(token);
    return result;
  }

  async goToCreateHorsePage() {
    await this.router.navigate(['create-horse']);
  }

  async goToHorseDetailsPage(horse: HorseV2) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        horseId: horse.horseId,
        horseV2JSON: JSON.stringify(horse)
      }
    };
    await this.router.navigate(['horse-details'], navigationExtras);
  }

  async goToMoveHorsePage() {
    await this.router.navigate(['move-horse']);
  }
}
