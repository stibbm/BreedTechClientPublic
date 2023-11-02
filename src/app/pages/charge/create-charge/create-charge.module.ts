import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateChargePageRoutingModule } from './create-charge-routing.module';

import { CreateChargePage } from './create-charge.page';
import {AppModule} from "../../../app.module";
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateChargePageRoutingModule,
        AppModule,
        HorsesPageModule
    ],
  declarations: [CreateChargePage]
})
export class CreateChargePageModule {}
