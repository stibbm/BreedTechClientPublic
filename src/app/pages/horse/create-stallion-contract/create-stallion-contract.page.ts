import { Component, OnInit } from '@angular/core';
import {FileService} from '../../../services/file.service';
import {LoaderService} from '../../../services/loader.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HorseV2} from '../../../model/Horse';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-create-stallion-contract',
  templateUrl: './create-stallion-contract.page.html',
  styleUrls: ['./create-stallion-contract.page.scss'],
})
export class CreateStallionContractPage implements OnInit {

  stallionContractFile: File;
  horseId: number;
  horseV2: HorseV2;

  constructor(
    private fileService: FileService,
    private loaderService: LoaderService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.loaderService.autoLoader();
    console.log('ngOnInit');
    await this.activatedRoute.queryParams
      .subscribe(params => {
        console.log('Params');
        console.log(params);
        this.horseId = params.horseId;
        this.horseV2 = JSON.parse(params.horseV2JSON);
      });
    console.log('parameters set');
    console.log('horseV2');
    console.log(this.horseV2);
    await this.loaderService.closeLoader();
  }

  async ionViewWillEnter() {
    console.log('ionViewWillEnter: ' + ' createStallionContract');
    await this.loaderService.autoLoader();
    await this.ngOnInit();
    await this.loaderService.closeLoader();
  }

  async onFileSelected(event) {
    const file: File = event.target.files[0];
    this.stallionContractFile = file;
  }

  async onCreateStallionContractButtonPressed() {
    try {
      await this.loaderService.autoLoader();
      console.log('onCreateStallionContractButtonPressed');
      const file: File = this.stallionContractFile;
      const fileName: string = file.name;
      await this.fileService.createFile2(file, fileName, this.horseId, 'horse');
      console.log('file uploaded');
      await this.loaderService.closeLoader();
      alert('Stallion contract saved');
      await this.router.navigate(['/horses']);
    }
    catch (exception) {
      console.log('failed to upload stallion contract');
      alert('failed to upload stallion contract');
    }
  }
}
