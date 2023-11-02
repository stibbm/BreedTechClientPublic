import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentActionsPageRoutingModule } from './appointment-actions-routing.module';

import { AppointmentActionsPage } from './appointment-actions.page';
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AppointmentActionsPageRoutingModule,
        HorsesPageModule
    ],
  declarations: [AppointmentActionsPage]
})
export class AppointmentActionsPageModule {}
