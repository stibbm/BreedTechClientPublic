import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorsesPageRoutingModule } from './horses-routing.module';

import { HorsesPage } from './horses.page';
import {HorseSelectorComponent} from "../../../components/selectors/horse-selector/horse-selector.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {CompanyHeaderComponent} from "../../../components/misc/company-header/company-header.component";
import {HeaderComponent} from "../../../components/misc/header/header.component";
import {CompanyHeaderV2Component} from "../../../components/misc/company-header-v2/company-header-v2.component";
import {
    UserSelectorDropdownComponent
} from "../../../components/selectors/user-selector-dropdown/user-selector-dropdown.component";
import {
    UserSelectorRadioComponent
} from "../../../components/selectors/user-selector-radio/user-selector-radio.component";
import {
    HorseSelectorRadioComponent
} from "../../../components/selectors/horse-selector-radio/horse-selector-radio.component";
import {
    AppointmentActionTypeRadioSelectorComponent
} from "../../../components/selectors/appointment-action-type-radio-selector/appointment-action-type-radio-selector.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorsesPageRoutingModule,
    NgxDatatableModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ],
    exports: [
        HorseSelectorComponent,
        CompanyHeaderComponent,
        CompanyHeaderV2Component,
        UserSelectorDropdownComponent,
        UserSelectorRadioComponent,
        HorseSelectorRadioComponent,
        AppointmentActionTypeRadioSelectorComponent
    ],
    declarations: [HorsesPage, HorseSelectorComponent, CompanyHeaderComponent, HeaderComponent, HeaderComponent, CompanyHeaderV2Component, UserSelectorDropdownComponent, UserSelectorRadioComponent, HorseSelectorRadioComponent, AppointmentActionTypeRadioSelectorComponent]
})
export class HorsesPageModule {}
