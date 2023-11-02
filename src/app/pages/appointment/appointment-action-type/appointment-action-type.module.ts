import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentActionTypePageRoutingModule } from './appointment-action-type-routing.module';

import { AppointmentActionTypePage } from './appointment-action-type.page';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AppointmentActionTypePageRoutingModule,
        MatTableModule,
        MatButtonModule,
        HorsesPageModule,
    ],
  declarations: [AppointmentActionTypePage]
})
export class AppointmentActionTypePageModule {}
