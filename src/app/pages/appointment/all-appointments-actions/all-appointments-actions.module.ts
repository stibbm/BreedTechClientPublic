import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllAppointmentsActionsPageRoutingModule } from './all-appointments-actions-routing.module';

import { AllAppointmentsActionsPage } from './all-appointments-actions.page';
import {MatTableModule} from "@angular/material/table";
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AllAppointmentsActionsPageRoutingModule,
        MatTableModule,
        HorsesPageModule
    ],
  declarations: [AllAppointmentsActionsPage]
})
export class AllAppointmentsActionsPageModule {}
