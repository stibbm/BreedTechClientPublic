import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorseCards2PageRoutingModule } from './horse-cards2-routing.module';

import { HorseCards2Page } from './horse-cards2.page';
import { HorsesPageModule } from "../horses/horses.module";

@NgModule({
    declarations: [HorseCards2Page],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HorseCards2PageRoutingModule,
        HorsesPageModule
    ]
})
export class HorseCards2PageModule {}
