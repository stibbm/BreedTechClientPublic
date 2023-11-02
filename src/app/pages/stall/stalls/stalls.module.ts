import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StallsPageRoutingModule } from './stalls-routing.module';

import { StallsPage } from './stalls.page';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AccountInfoBannerComponent} from '../../../components/misc/account-info-banner/account-info-banner.component';
import {MatTableModule} from "@angular/material/table";
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StallsPageRoutingModule,
        NgxDatatableModule,
        MatTableModule,
        HorsesPageModule
    ],
  exports: [
    AccountInfoBannerComponent
  ],
  declarations: [StallsPage, AccountInfoBannerComponent]
})
export class StallsPageModule {}
