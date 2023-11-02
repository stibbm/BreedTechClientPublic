import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserChargesHistoryPageRoutingModule } from './user-charges-history-routing.module';

import { UserChargesHistoryPage } from './user-charges-history.page';
import {MatTableModule} from "@angular/material/table";
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserChargesHistoryPageRoutingModule,
        MatTableModule,
        HorsesPageModule
    ],
  declarations: [UserChargesHistoryPage]
})
export class UserChargesHistoryPageModule {}
