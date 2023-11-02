import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAppointmentActionPageRoutingModule } from './create-appointment-action-routing.module';

import { CreateAppointmentActionPage } from './create-appointment-action.page';
import {
    AppointmentActionTypeSelectorComponent
} from "../../../components/selectors/appointment-action-type-selector/appointment-action-type-selector.component";
import {MatTableModule} from "@angular/material/table";
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateAppointmentActionPageRoutingModule,
        MatTableModule,
        HorsesPageModule
    ],
    declarations: [CreateAppointmentActionPage, AppointmentActionTypeSelectorComponent]
})
export class CreateAppointmentActionPageModule {}
