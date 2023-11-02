import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAppointmentActionTypePageRoutingModule } from './create-appointment-action-type-routing.module';

import { CreateAppointmentActionTypePage } from './create-appointment-action-type.page';
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateAppointmentActionTypePageRoutingModule,
        HorsesPageModule
    ],
  declarations: [CreateAppointmentActionTypePage]
})
export class CreateAppointmentActionTypePageModule {}
