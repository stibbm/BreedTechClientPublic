import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient} from '@angular/common/http';
import {ApiEndpointsService} from './api-endpoints.service';
import {GetFileRequest, GetFileResponse, GetFilesByParentRequest, GetFilesByParentResponse} from '../model/File';
import {Options} from '../model/Options';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private apiEndpointsService: ApiEndpointsService
  ) {}

  async getFilesByParent(parentId: number, parentType: string) {
    console.log('getFilesByParent');
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getFilesByParentRequest: GetFilesByParentRequest = {
      parentId: parentId,
      parentType: parentType
    };
    const getFilesByParentResponse: GetFilesByParentResponse =
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      <GetFilesByParentResponse>await this.httpClient.post(await this.apiEndpointsService.getFilesByParent(), getFilesByParentRequest, options).toPromise();
    return getFilesByParentResponse;
  }

  async createFile(formData: FormData): Promise<any> {
    const authToken: string = await this.authService.getCurrentAuthToken();
    formData.append('authToken', authToken);
    console.log('createFile');
    const requestOptions = {
      method: 'POST',
      body: formData
    };
    const response = await fetch(await this.apiEndpointsService.createFile(), requestOptions);
    const responseJson = await response.json();
    console.log(responseJson.toString());
  }

  async createFile2(file: File, filePath: string, parentId: number, parentType: string): Promise<any> {
    console.log('createFile2');
    const authToken: string = await this.authService.getCurrentAuthToken();
    const formData: FormData = new FormData();
    formData.append('authToken', authToken);
    formData.append('file', file);
    formData.append('fileName', filePath);
    formData.append('parentId', ''+parentId);
    formData.append('parentType', parentType);
    const requestOptions = {
      method: 'POST',
      body: formData
    };
    console.log('createFile2!!!');
    const response = await fetch(await this.apiEndpointsService.createFile(), requestOptions);
    const responseJson = await response.json();
    console.log(responseJson.toString());
  }

  //async createFile2(fileName: string, parentId: number, formData:)

  /*async getFile(getFileRequest: GetFileRequest): Promise<GetFileResponse> {
    console.log('getFile');
    console.log(getFileRequest);
    const options: Options = await this.authService.getAuthenticatedHeadersWrappedInOptionsAsync();
    const getFileResponse: GetFileResponse = <GetFileResponse>
      await this.httpClient.post(
        await this.apiEndpointsService.getFile(),
        getFileRequest,
        options
      ).toPromise();
    console.log('getFileResponse');
    console.log(getFileResponse);
    return getFileResponse;
  }*/

  async getDownloadUrl(filePath: string) {
    let authToken: string = await this.authService.getCurrentAuthToken();
    console.log('getDownloadUrl');
    let downloadUrl: string = await this.apiEndpointsService.getFileByPath();
    downloadUrl = downloadUrl + '?filePath=' + filePath;
    downloadUrl = downloadUrl + '&authToken=' + authToken;
    console.log('getDownloadUrl Response:');
    console.log(downloadUrl);
    return downloadUrl;
  }

  async downloadFile2(filePath: string) {
    console.log('downloadFile2');
    const authToken: string = await this.authService.getCurrentAuthToken();
    console.log(authToken);
    const urlEncodedAuthToken: string = encodeURIComponent(authToken);
    const urlEncodedFilePath: string = encodeURIComponent(filePath);
    let downloadFileUrl: string = await this.apiEndpointsService.getFile();
    downloadFileUrl = downloadFileUrl + '?filePath=' + urlEncodedFilePath + '&authToken=' + urlEncodedAuthToken;
    this.httpClient.get(downloadFileUrl, {
      responseType: 'blob', headers: {accept: '*'}
    }).subscribe(blob => {
      saveAs(blob, filePath);
    });
  }

  async downloadFile() {
    this.httpClient.get('data:image/jpeg;base64,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',
      {responseType: 'blob', headers: {accept: 'application/pdf'}}
      ).subscribe(blob => {
        saveAs(blob, 'testDownload.jpeg');
    });
  }

  async downloadFileWithFullPath(filePath: string, savePath: string) {
    this.httpClient.get(filePath,
      {
        responseType: 'blob',
        headers: {
          accept: 'application/json'
        }
      }
    ).subscribe(blob => {
      saveAs(blob, savePath);
    });
  }




}
