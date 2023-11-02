import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateStallPageRoutingModule } from './create-stall-routing.module';

import { CreateStallPage } from './create-stall.page';
import {CreateStallInputComponent} from '../../../components/inputs/create-stall-input/create-stall-input.component';
import {CreateAppointmentPageModule} from "../../appointment/create-appointment/create-appointment.module";
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateStallPageRoutingModule,
        ReactiveFormsModule,
        CreateAppointmentPageModule,
        HorsesPageModule
    ],
  declarations: [CreateStallPage, CreateStallInputComponent]
})
export class CreateStallPageModule {}
