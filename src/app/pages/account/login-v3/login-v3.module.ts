import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginV3PageRoutingModule } from './login-v3-routing.module';

import { LoginV3Page } from './login-v3.page';
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginV3PageRoutingModule,
        HorsesPageModule
    ],
  declarations: [LoginV3Page]
})
export class LoginV3PageModule {}
