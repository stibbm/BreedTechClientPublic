import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentsAmountDuePageRoutingModule } from './appointments-amount-due-routing.module';

import { AppointmentsAmountDuePage } from './appointments-amount-due.page';
import {MatTableModule} from "@angular/material/table";
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AppointmentsAmountDuePageRoutingModule,
        MatTableModule,
        HorsesPageModule
    ],
  declarations: [AppointmentsAmountDuePage]
})
export class AppointmentsAmountDuePageModule {}
