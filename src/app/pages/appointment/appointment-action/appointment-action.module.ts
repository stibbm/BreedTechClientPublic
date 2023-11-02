import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentActionPageRoutingModule } from './appointment-action-routing.module';

import { AppointmentActionPage } from './appointment-action.page';
import {MatTableModule} from "@angular/material/table";
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AppointmentActionPageRoutingModule,
        MatTableModule,
        HorsesPageModule
    ],
  declarations: [AppointmentActionPage]
})
export class AppointmentActionPageModule {}
