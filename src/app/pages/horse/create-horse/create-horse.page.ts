import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateHorseRequest, CreateHorseResponse, Horse} from '../../../model/Horse';
import {CreateHorseInputComponent} from '../../../components/inputs/create-horse-input/create-horse-input.component';
import {HorseService} from '../../../services/horses.service';
import {Router} from '@angular/router';
import {BreedingContractService} from '../../../services/breeding-contract.service';
import {
  CreateBreedingContractResponse,
  CreateBreedingContractStringRequest,
  CreateBreedingContractStringResponse
} from '../../../model/BreedingContract';
import {FileService} from '../../../services/file.service';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-create-horse',
  templateUrl: './create-horse.page.html',
  styleUrls: ['./create-horse.page.scss'],
})
export class CreateHorsePage implements OnInit {

  @ViewChild(CreateHorseInputComponent, {static: false}) createHorseInputComponent: CreateHorseInputComponent;

  horse: Horse;
  formData: FormData;

  file: File;
  filePath: string;

  constructor(
    private horseService: HorseService,
    private router: Router,
    private breedingContractService: BreedingContractService,
    private fileService: FileService,
    private authService: AuthService
    ) { }

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
  }

  async createHorseBreedingContract(event) {
    const file = event.target.files[0];
    //let formData: FormData = new FormData();
    //formData.append('file', file);
    //this.formData = formData;

  }

  async createContractFile(filePath: string, file: File, parentId: number, parentType: string) {
    console.log('createContractFile');
    await this.fileService.createFile2(
      file, filePath, parentId, parentType
    );
  }

  async test() {

  }

  async onFileSelected(event) {
    const file: File = event.target.files[0];
    const filePath = file.name;
    await this.createContractFile(file.name, file, 25, 'horse');
    console.log('file creation attempted');
    alert('file creation attempted');
    /*const parentType = 'horse';
    const parentId = this.horse.id;
    const createFileResponse = await this.fileService.createFile2(
      file, filePath, parentId, parentType
    );
    console.log(createFileResponse.text);*/
  }

  async onCreateHorseButtonPressed() {
    console.log('onCreateHorseButtonPressed');
    const createHorseRequest: CreateHorseRequest = {
      name: this.createHorseInputComponent.name,
      registrationNumber: this.createHorseInputComponent.registrationNumber,
      dam: this.createHorseInputComponent.dam,
      damSire: this.createHorseInputComponent.damSire,
      sire: this.createHorseInputComponent.sire,
      ownerUserId: await this.createHorseInputComponent.getOwnerUserId(),
      isStallion: await this.createHorseInputComponent.getIsStallion()
    };
    const createHorseResponse: CreateHorseResponse = await this.horseService.createHorse(createHorseRequest);

    try {
      // file
      // filePath
      // horseId
      let formData: FormData = this.createHorseInputComponent.stallionContractFormData;
      formData.append('horseId', '' + createHorseResponse.horse.id);

      await this.breedingContractService.createBreedingContract(formData);

    } catch (err) {
      console.log(err);
    }


    try {
      const response = await this.createContractFile(this.file.name, this.file, createHorseResponse.horse.id, 'horse');
      console.log(response);
      //await this.fileService.createFile2(this.file, this.file.name, createHorseResponse.horse.id, 'horse');
      console.log('successfully created file');
    } catch (e) {
      console.log('error creating file');
      console.log(e);
    }


    console.log('done');
    alert('Horse has been created');
    await this.router.navigate(['horses']);
    await this.reset();
  }

  async reset() {
    this.horse = null;
    await this.createHorseInputComponent.reset();
  }

}
