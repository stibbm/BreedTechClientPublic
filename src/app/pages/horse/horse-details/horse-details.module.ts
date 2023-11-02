import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorseDetailsPageRoutingModule } from './horse-details-routing.module';

import { HorseDetailsPage } from './horse-details.page';
import {HorsesPageModule} from "../horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HorseDetailsPageRoutingModule,
        HorsesPageModule
    ],
  declarations: [HorseDetailsPage]
})
export class HorseDetailsPageModule {}
