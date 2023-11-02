import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateHorsePageRoutingModule } from './create-horse-routing.module';

import { CreateHorsePage } from './create-horse.page';
import {CreateHorseInputComponent} from "../../../components/inputs/create-horse-input/create-horse-input.component";
import {MatRadioModule} from "@angular/material/radio";
import {MatListModule} from "@angular/material/list";
import {CreateAppointmentPageModule} from "../../appointment/create-appointment/create-appointment.module";
import {HorsesPageModule} from "../horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateHorsePageRoutingModule,
        MatRadioModule,
        MatListModule,
        CreateAppointmentPageModule,
        HorsesPageModule
    ],
    declarations: [CreateHorsePage, CreateHorseInputComponent]
})
export class CreateHorsePageModule {}
