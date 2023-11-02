import { Component, OnInit } from '@angular/core';
import {
  AppointmentActionType,
  AppointmentActionTypeDisplayable,
  GetAppointmentActionTypesDisplayableResponse
} from '../../../model/AppointmentActionType';
import {AppointmentActionTypeService} from '../../../services/appointment-action-type.service';
import {getAppointmentsWithNamesMatchingQuery} from "../../../actions/AppointmentActions";

@Component({
  selector: 'app-appointment-action-type-selector',
  templateUrl: './appointment-action-type-selector.component.html',
  styleUrls: ['./appointment-action-type-selector.component.scss'],
})
export class AppointmentActionTypeSelectorComponent implements OnInit {

  isSelectionComplete = false;
  searchTerm = '';
  appointmentActionTypeDisplayablesList: AppointmentActionTypeDisplayable[];
  isAppointmentActionTypeDisplayablesListLoaded = false;
  appointmentActionTypeDisplayable: AppointmentActionTypeDisplayable;
  appointmentActionTypeDisplayableSelected: AppointmentActionTypeDisplayable;

  displayColumns: string[] =
    [
      'id',
      'name',
      'description',
      'amount',
      'smsMessage',
      'actions'
    ];

  constructor(
    private appointmentActionTypeService: AppointmentActionTypeService
  ) { }

  async ngOnInit() {
    console.log('ngOnInit');
    await this.ionViewDidLoad();
  }

  async ionViewDidLoad() {
    await this.loadAppointmentActionTypesList();
  }

  async onAppointmentActionTypeSelected(appointmentActionTypeDisplayable: AppointmentActionTypeDisplayable) {
    console.log('appointmentActionType selected');
    this.appointmentActionTypeDisplayable = appointmentActionTypeDisplayable;
    this.isSelectionComplete = true;
  }

  async loadAppointmentActionTypesList() {
    this.isAppointmentActionTypeDisplayablesListLoaded = false;
    console.log('loadAppointmentActionTypes');
    const getAppointmentActionTypeDisplayablesResponse: GetAppointmentActionTypesDisplayableResponse =
      await this.appointmentActionTypeService.getAppointmentActionTypeDisplayables();
    const appointmentActionsList: AppointmentActionTypeDisplayable[] = getAppointmentActionTypeDisplayablesResponse
      .appointmentActionTypeDisplayablesList;
    this.appointmentActionTypeDisplayablesList = appointmentActionsList;
    this.appointmentActionTypeDisplayablesList = getAppointmentsWithNamesMatchingQuery(appointmentActionsList, this.searchTerm);
    console.log('appointmentActionsTypesList');
    console.log(this.appointmentActionTypeDisplayablesList);
    this.isAppointmentActionTypeDisplayablesListLoaded = true;
  }

  async getAppointmentActionTypeDisplayable(): Promise<AppointmentActionTypeDisplayable> {
    return this.appointmentActionTypeDisplayable;
  }

  async onSelectAppointmentActionTypeButtonPressed(appointmentActionTypeDisplayable: AppointmentActionTypeDisplayable)
  {
    console.log(appointmentActionTypeDisplayable);
    console.log('onSelectAppointmentActionTypeButtonPressed');
  }

  async resetSelector() {
    console.log('reset appointment actions selector');
    this.appointmentActionTypeDisplayable = null;
    this.appointmentActionTypeDisplayablesList = null;
    this.searchTerm = null;
    this.isSelectionComplete = false;
    await this.loadAppointmentActionTypesList();
  }
}
