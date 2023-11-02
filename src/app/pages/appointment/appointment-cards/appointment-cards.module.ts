import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentCardsPageRoutingModule } from './appointment-cards-routing.module';

import { AppointmentCardsPage } from './appointment-cards.page';
import {HorsesPageModule} from '../../horse/horses/horses.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentCardsPageRoutingModule,
    HorsesPageModule
  ],
  declarations: [AppointmentCardsPage]
})
export class AppointmentCardsPageModule {}
