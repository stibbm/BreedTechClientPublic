import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentActionTypesPageRoutingModule } from './appointment-action-types-routing.module';

import { AppointmentActionTypesPage } from './appointment-action-types.page';
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AppointmentActionTypesPageRoutingModule,
        HorsesPageModule
    ],
  declarations: [AppointmentActionTypesPage]
})
export class AppointmentActionTypesPageModule {}
