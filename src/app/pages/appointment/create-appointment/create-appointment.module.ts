import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAppointmentPageRoutingModule } from './create-appointment-routing.module';

import { CreateAppointmentPage } from './create-appointment.page';
import {
    CreateAppointmentInputComponent
} from "../../../components/inputs/create-appointment-input/create-appointment-input.component";
import {UserSelectorComponent} from "../../../components/selectors/user-selector/user-selector.component";
import {
  HorseSelectorByUserIdComponent
} from "../../../components/selectors/horse-selector-by-user-id/horse-selector-by-user-id.component";
import {MatButtonModule} from "@angular/material/button";
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateAppointmentPageRoutingModule,
        MatButtonModule,
        HorsesPageModule
    ],
    exports: [
        UserSelectorComponent
    ],
    declarations: [CreateAppointmentPage, CreateAppointmentInputComponent, UserSelectorComponent, HorseSelectorByUserIdComponent]
})
export class CreateAppointmentPageModule {}
