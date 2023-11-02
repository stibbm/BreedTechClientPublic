import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountInfoPageRoutingModule } from './account-info-routing.module';

import { AccountInfoPage } from './account-info.page';
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AccountInfoPageRoutingModule,
        HorsesPageModule
    ],
  declarations: [AccountInfoPage]
})
export class AccountInfoPageModule {}
