import { Component, OnInit } from '@angular/core';
import {SemenCollectionLogService} from '../../../services/semen-collection-log.service';
import {Router} from '@angular/router';
import {GetSemenCollectionLogsResponse, SemenCollectionLog} from '../../../model/SemenCollectionLog';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-semen-collection-log',
  templateUrl: './semen-collection-log.page.html',
  styleUrls: ['./semen-collection-log.page.scss'],
})
export class SemenCollectionLogPage implements OnInit {

  semenCollectionLogsList: SemenCollectionLog[];

  displayableColumns = [
    'id',
    'appointmentId',
    'strawsCount',
    'userId',
    'timestamp'
  ];

  constructor(
    private semenCollectionLogService: SemenCollectionLogService,
    private router: Router,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.authService.verifyUserLoggedIn();
    await this.ionViewWillEnter();
  }


  async ionViewWillEnter() {

    console.log('ionViewWillEnter');
    await this.loadSemenCollectionLogsList();
  }

  async loadSemenCollectionLogsList() {
    console.log('loadSemenCollectionLogsList');
    const getSemenCollectionLogsResponse: GetSemenCollectionLogsResponse =
      await this.semenCollectionLogService.getSemenCollectionLogs();
    console.log(getSemenCollectionLogsResponse);
    this.semenCollectionLogsList = getSemenCollectionLogsResponse.semenCollectionLogsList;

  }

}
