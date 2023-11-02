import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StallDetailsPageRoutingModule } from './stall-details-routing.module';

import { StallDetailsPage } from './stall-details.page';
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StallDetailsPageRoutingModule,
        HorsesPageModule
    ],
  declarations: [StallDetailsPage]
})
export class StallDetailsPageModule {}
