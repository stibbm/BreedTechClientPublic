import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Options} from '../model/Options';
import {
  CreateBreedingContractResponse,
  CreateBreedingContractStringRequest,
  CreateBreedingContractStringResponse,
  GetBreedingContractByIdRequest,
  GetBreedingContractByIdResponse, GetBreedingContractPathsByHorseIdRequest, GetBreedingContractPathsByHorseIdResponse,
  GetBreedingContractsByHorseIdRequest, GetBreedingContractsByHorseIdResponse
} from '../model/BreedingContract';
import {
  CREATE_BREEDING_CONTRACT_STRING_URL,
  CREATE_BREEDING_CONTRACT_URL,
  GET_BREEDING_CONTRACT_BY_ID_URL,
  GET_BREEDING_CONTRACT_IMAGE_V2_URL,
  GET_BREEDING_CONTRACT_PATHS_BY_HORSE_ID_URL,
  GET_BREEDING_CONTRACTS_BY_HORSE_ID_URL
} from '../constants/routes';
import {ApiEndpointsService} from "./api-endpoints.service";

@Injectable({
  providedIn: 'root'
})
export class BreedingContractService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private apiEndpointsService: ApiEndpointsService,
  ) {}

  async createBreedingContractString(createBreedingContractStringRequest: CreateBreedingContractStringRequest): Promise<CreateBreedingContractStringResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    console.log('createBreedingContractResponse');
    const createBreedingContractStringResponse: CreateBreedingContractStringResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <CreateBreedingContractStringResponse>
      await this.httpClient.post(
        await this.apiEndpointsService.createBreedingContractString(), createBreedingContractStringRequest, options)
        .toPromise();
    return createBreedingContractStringResponse;
  }

  async createBreedingContract(formData: FormData): Promise<any> {
    //const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const authToken: string = await this.authService.getCurrentAuthToken();
    formData.append('authToken', authToken);
    //const createBreedingContractResponse: CreateBreedingContractResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    //   <CreateBreedingContractResponse>
    //     await this.httpClient.post(CREATE_BREEDING_CONTRACT_URL, formData, options).toPromise();
    console.log('createBreedingContractResponse');
    //console.log(createBreedingContractResponse);
    const headers = {
      authToken
    };
    //const token: string = options.headers.get('authToken');
    const requestOptions = {
      method: 'POST',
      body: formData
    };
    const response = await fetch(await this.apiEndpointsService.createBreedingContractString(), requestOptions);
    const responseJson = await response.json();
    console.log(responseJson.toString());
    //return createBreedingContractResponse;
  }

  async getBreedingContractById(getBreedingContractByIdRequest: GetBreedingContractByIdRequest): Promise<GetBreedingContractByIdResponse>
  {
      console.log('getBreedingContractById');
      console.log(getBreedingContractByIdRequest);
      const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
      const getBreedingContractByIdResponse: GetBreedingContractByIdResponse =
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        <GetBreedingContractByIdResponse> await this.httpClient.post(await this.apiEndpointsService.getBreedingContractById(),
          getBreedingContractByIdRequest, options).toPromise();
      console.log('getBreedingContractByIdResponse');
      console.log(getBreedingContractByIdResponse);
      return getBreedingContractByIdResponse;
  }

  async getBreedingContractsByHorseId(getBreedingContractsByHorseIdRequest: GetBreedingContractsByHorseIdRequest)
  :Promise<GetBreedingContractsByHorseIdResponse>{
    console.log('getBreedingContractsByHorseId');
    console.log(getBreedingContractsByHorseIdRequest);
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getBreedingContractsByHorseIdResponse: GetBreedingContractsByHorseIdResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetBreedingContractsByHorseIdResponse> await this.httpClient.post(await this.apiEndpointsService.getBreedingContractsByHorseId(),
        getBreedingContractsByHorseIdRequest, options).toPromise();
    return getBreedingContractsByHorseIdResponse;
  }

  //async getBreedingContractImagesByHorseId(getBreedingContractImagesByHorseIdRequest: GetBreedingContractImagesByHorseIdRequest) {

  //}
  async getBreedingContractPathsByHorseId(getBreedingContractPathsByHorseIdRequest: GetBreedingContractPathsByHorseIdRequest):
    Promise<GetBreedingContractPathsByHorseIdResponse> {
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getBreedingContractPathsByHorseIdResponse: GetBreedingContractPathsByHorseIdResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetBreedingContractPathsByHorseIdResponse>
        // eslint-disable-next-line max-len
      await this.httpClient.post(await this.apiEndpointsService.getBreedingContractPathsByHorseId(), getBreedingContractPathsByHorseIdRequest,
        options).toPromise();
    return getBreedingContractPathsByHorseIdResponse;
  }

  async getBreedingContractImageV2(breedingContractImageV2Url: string): Promise<string> {
    const authToken: string = await this.authService.getCurrentAuthToken();
    let url: string = GET_BREEDING_CONTRACT_IMAGE_V2_URL;
    console.log('breedingContractImageV2Url');
    console.log(breedingContractImageV2Url);
    url = url + '?' + 'imageUrl=' + breedingContractImageV2Url +
      '&' + 'authToken=' + authToken;
    console.log(url);
    return url;
  }

  async getContractImageUrl(filePath: string) {
      const authToken: string = await this.authService.getCurrentAuthToken();
      let url: string = await this.apiEndpointsService.getContractImage();
      url = url + '?s3FilePath=' + filePath;
      //url = url + '&authToken=' + authToken;
      url = url + '&authToken=' + 'ogirheoighorw';
      return url;
  }

}
