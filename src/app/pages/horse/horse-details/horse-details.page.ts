import { Component, OnInit } from '@angular/core';
import {FileService} from '../../../services/file.service';
import {HorseService} from '../../../services/horses.service';
import {HorseLocationService} from '../../../services/horse-location.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {LoaderService} from '../../../services/loader.service';
import {HorseV2} from '../../../model/Horse';
import {BreedingContractService} from '../../../services/breeding-contract.service';
import { saveAs } from 'file-saver';
import {GetBreedingContractsByHorseIdRequest, GetBreedingContractsByHorseIdResponse} from '../../../model/BreedingContract';
import {File, GetFilesByParentRequest, GetFilesByParentResponse} from '../../../model/File';
import {AuthService} from '../../../services/auth.service';
import {AppointmentService} from '../../../services/appointments.service';
import {
  AppointmentV2, AppointmentV2Displayable, GetAppointmentAmountDueRequest, GetAppointmentAmountDueResponse,
  GetAppointmentsByHorseIdRequest,
  GetAppointmentsByHorseIdResponse, GetAppointmentV2ByIdRequest, GetAppointmentV2ByIdResponse
} from '../../../model/Appointment';
import {AppointmentAdapterService} from '../../../services/appointment-adapter.service';
import {AppointmentWithCostSummary} from '../../../model/AppointmentWithCostSummary';
import {convertToAppointmentWithCostSummary} from '../../../adapter/AppointmentWithCostSummaryAdapter';

@Component({
  selector: 'app-horse-details',
  templateUrl: './horse-details.page.html',
  styleUrls: ['./horse-details.page.scss'],
})
export class HorseDetailsPage implements OnInit {

  horseId: number;
  horseV2: HorseV2;
  isHorseV2Loaded = false;
  filePaths: string[] = [];
  isFilePathsLoaded = false;

  imageSourcesList: string[] = [];
  imageSource: string;
  isImageSourcesListLoaded = false;
  isFullFilePathLoaded = false;

  appointmentsList: AppointmentV2[] = [];
  isAppointmentsLoaded = false;

  appointmentV2DisplayablesList: AppointmentV2Displayable[] = [];
  isAppointmentV2DisplayablesListLoaded = false;

  appointmentWithCostSummarysList: AppointmentWithCostSummary[] = [];
  isAppointmentWithCostSummarysListLoaded = false;

  constructor(
    private fileService: FileService,
    private horseService: HorseService,
    private horseLocationService: HorseLocationService,
    private activatedRoute: ActivatedRoute,
    private loaderService: LoaderService,
    private breedingContractService: BreedingContractService,
    private authService: AuthService,
    private appointmentService: AppointmentService,
    private appointmentAdapterService: AppointmentAdapterService,
    private router: Router,
  ) { }

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.loaderService.autoLoader();
    this.isHorseV2Loaded = false;
    await this.activatedRoute.queryParams
      .subscribe(params => {
        this.horseId = params.horseId;
        this.horseV2 = JSON.parse(params.horseV2JSON);
      });
    this.isHorseV2Loaded = true;
    await this.ionViewWillEnter();
    await this.loaderService.closeLoader();
  }

  async ionViewWillEnter() {
    await this.loadImageUrls();
    await this.getAppointmentsByHorseId(this.horseV2.horseId);
    await this.loadAppointmentWithCostSummarysList();
  }

  async loadAppointmentWithCostSummarysList() {
    const getAppointmentsByHorseIdRequest: GetAppointmentsByHorseIdRequest = {
      horseId: this.horseId
    };
    const getAppointmentsByHorseIdResponse: GetAppointmentsByHorseIdResponse =
      await this.appointmentService.getAppointmentsByHorseId(getAppointmentsByHorseIdRequest);
    const appointmentsList: AppointmentV2[] = getAppointmentsByHorseIdResponse.appointmentsList;
    const appointmentListsLength: number = appointmentsList.length;

    this.isAppointmentWithCostSummarysListLoaded = false;
    const appointmentWithCostSummarysList: AppointmentWithCostSummary[] = [];
    for (let i=0;i<appointmentListsLength;i++) {
      const appointmentV2: AppointmentV2 = appointmentsList[i];
      const appointmentV2Displayable: AppointmentV2Displayable =
        this.appointmentAdapterService.adaptToAppointmentV2Displayable(appointmentV2);
      const getAppointmentAmountDueRequest: GetAppointmentAmountDueRequest = {
        appointmentId: appointmentV2.id
      };
      const getAppointmentAmountDueResponse: GetAppointmentAmountDueResponse =
        await this.appointmentService.getAppointmentAmountDue(getAppointmentAmountDueRequest);
      const appointmentWithCostSummary: AppointmentWithCostSummary = convertToAppointmentWithCostSummary(
        appointmentV2Displayable, getAppointmentAmountDueResponse
      );
      appointmentWithCostSummarysList.push(appointmentWithCostSummary);
    }

    this.appointmentWithCostSummarysList = appointmentWithCostSummarysList;
    this.isAppointmentWithCostSummarysListLoaded = true;

  }

  async loadImageUrls() {
    this.isImageSourcesListLoaded = false;
    const getBreedingContractsByHorseIdRequest: GetBreedingContractsByHorseIdRequest = {
      horseId: this.horseId
    };
    const getBreedingContractsByHorseIdResponse: GetBreedingContractsByHorseIdResponse =
      await this.breedingContractService.getBreedingContractsByHorseId(getBreedingContractsByHorseIdRequest);
    const filePathsList: string[] = getBreedingContractsByHorseIdResponse.filePathsList;
    console.log(filePathsList);
    if (filePathsList.length > 0) {
      const filePath: string = filePathsList[0];
      const imageSource: string = await this.breedingContractService.getContractImageUrl(filePath);
      this.imageSourcesList = filePathsList;
      this.imageSource = imageSource;
      this.isImageSourcesListLoaded = true;
    }
  }

  async onDownloadButtonPressed(horseV2: HorseV2) {
    const horseId: number = horseV2.horseId;
    const getFilesByParentRequest: GetFilesByParentRequest = {
      parentId: horseId,
      parentType: 'horse'
    };
    const getFilesByParentResponse: GetFilesByParentResponse =
      await this.fileService.getFilesByParent(horseId, 'horse');
    this.isFullFilePathLoaded = false;
    const filesList: File[] = getFilesByParentResponse.filesList;
    const filesListLength: number = filesList.length;
    for (let i=0;i<filesListLength;i++) {
      const file: File = filesList[i];
      const filePath: string = file.s3FilePath;
      const fullFilePath: string = await this.fileService.getDownloadUrl(filePath);
      const isFullFilePathLoaded = true;
      this.isFullFilePathLoaded = isFullFilePathLoaded;
      await this.fileService.downloadFileWithFullPath(fullFilePath, filePath);
    }
  }

  async getAppointmentsByHorseId(horseId: number) {
    this.isAppointmentsLoaded = false;
    this.isAppointmentV2DisplayablesListLoaded = false;
    console.log('getAppointmentsByHorseId');
    const getAppointmentsByHorseIdRequest: GetAppointmentsByHorseIdRequest = {
      horseId
    };
    const getAppointmentsByHorseIdResponse: GetAppointmentsByHorseIdResponse =
      await this.appointmentService.getAppointmentsByHorseId(getAppointmentsByHorseIdRequest);
    const appointmentsList: AppointmentV2[] =  getAppointmentsByHorseIdResponse.appointmentsList;
    console.log('appointmentsList');
    console.log(appointmentsList);
    const appointmentV2DisplayablesList: AppointmentV2Displayable[] =
      this.appointmentAdapterService.adaptListToAppointmentV2Displayable(appointmentsList);
    console.log('appointmentV2DisplayablesList');
    console.log(appointmentV2DisplayablesList);
    this.appointmentsList = appointmentsList;
    this.appointmentV2DisplayablesList = appointmentV2DisplayablesList;
    this.isAppointmentsLoaded = true;
    this.isAppointmentV2DisplayablesListLoaded = true;
  }

  async downloadStallionContract() {
  }

  async onMoveHorseButtonPressed() {
    await this.router.navigate(['/move-horse']);
  }

  async goToAppointmentDetailsPage(appointmentWithCostSummary: AppointmentWithCostSummary) {
    const getAppointmentV2ByIdRequest: GetAppointmentV2ByIdRequest = {
      id: appointmentWithCostSummary.id
    };
    const getAppointmentV2ByIdResponse: GetAppointmentV2ByIdResponse =
      await this.appointmentService.getAppointmentV2ById(getAppointmentV2ByIdRequest);
    const appointmentV2: AppointmentV2 = getAppointmentV2ByIdResponse.appointmentV2;
    console.log('goToAppointmentDetailsPage');
    console.log(appointmentWithCostSummary);
    const navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentV2JSON: JSON.stringify(appointmentV2)
      }
    };
    await this.router.navigate(['appointment-details'], navigationExtras);
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

}
