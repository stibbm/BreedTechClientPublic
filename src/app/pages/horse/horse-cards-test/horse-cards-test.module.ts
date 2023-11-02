import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorseCardsTestPageRoutingModule } from './horse-cards-test-routing.module';

import { HorseCardsTestPage } from './horse-cards-test.page';
import {HorsesPageModule} from "../horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HorseCardsTestPageRoutingModule,
        HorsesPageModule
    ],
  declarations: [HorseCardsTestPage]
})
export class HorseCardsTestPageModule {}
