import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoveHorseFromStallsPagePageRoutingModule } from './move-horse-from-stalls-page-routing.module';

import { MoveHorseFromStallsPagePage } from './move-horse-from-stalls-page.page';
import {HorsesPageModule} from "../horses/horses.module";
import {MoveHorsePageModule} from "../move-horse/move-horse.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoveHorseFromStallsPagePageRoutingModule,
    HorsesPageModule,
    MoveHorsePageModule
  ],
  declarations: [MoveHorseFromStallsPagePage]
})
export class MoveHorseFromStallsPagePageModule {}
