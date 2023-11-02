import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginV2PageRoutingModule } from './login-v2-routing.module';

import { LoginV2Page } from './login-v2.page';
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginV2PageRoutingModule,
        HorsesPageModule
    ],
  declarations: [LoginV2Page]
})
export class LoginV2PageModule {}
