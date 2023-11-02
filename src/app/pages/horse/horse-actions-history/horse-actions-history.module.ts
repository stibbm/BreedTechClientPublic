import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorseActionsHistoryPageRoutingModule } from './horse-actions-history-routing.module';

import { HorseActionsHistoryPage } from './horse-actions-history.page';
import {MatTableModule} from "@angular/material/table";
import {HorsesPageModule} from "../horses/horses.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorseActionsHistoryPageRoutingModule,
    MatTableModule,
    HorsesPageModule
  ],
  declarations: [HorseActionsHistoryPage]
})
export class HorseActionsHistoryPageModule {}
