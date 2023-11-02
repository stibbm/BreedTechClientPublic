import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorseCardsPageRoutingModule } from './horse-cards-routing.module';

import { HorseCardsPage } from './horse-cards.page';
import {HorsesPageModule} from "../horses/horses.module";
import {
    HorseCardsComponentComponent
} from "../../../components/cards/horse-cards-component/horse-cards-component.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorseCardsPageRoutingModule,
    HorsesPageModule
  ],
    declarations: [HorseCardsPage, HorseCardsComponentComponent]
})
export class HorseCardsPageModule {}
