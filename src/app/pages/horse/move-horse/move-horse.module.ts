import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoveHorsePageRoutingModule } from './move-horse-routing.module';

import { MoveHorsePage } from './move-horse.page';
import {HorsesPageModule} from "../horses/horses.module";
import {StallSelectorComponent} from "../../../components/selectors/stall-selector/stall-selector.component";
import {
    HorseSelectorByUserIdAndActiveAppointmentComponent
} from "../../../components/selectors/horse-selector-by-user-id-and-active-appointment/horse-selector-by-user-id-and-active-appointment.component";
import {
    HorseSelectorByActiveAppointmentComponent
} from "../../../components/inputs/horse-selector-by-active-appointment/horse-selector-by-active-appointment.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MoveHorsePageRoutingModule,
        HorsesPageModule
    ],
    exports: [
        StallSelectorComponent
    ],
    declarations: [MoveHorsePage, StallSelectorComponent, HorseSelectorByUserIdAndActiveAppointmentComponent, HorseSelectorByActiveAppointmentComponent]
})
export class MoveHorsePageModule {}
