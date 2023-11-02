import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingAppointmentActionsPageRoutingModule } from './upcoming-appointment-actions-routing.module';

import { UpcomingAppointmentActionsPage } from './upcoming-appointment-actions.page';
import {MatTableModule} from "@angular/material/table";
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UpcomingAppointmentActionsPageRoutingModule,
        MatTableModule,
        HorsesPageModule
    ],
  declarations: [UpcomingAppointmentActionsPage]
})
export class UpcomingAppointmentActionsPageModule {}
