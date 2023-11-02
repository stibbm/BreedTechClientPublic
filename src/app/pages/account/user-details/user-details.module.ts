import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailsPageRoutingModule } from './user-details-routing.module';

import { UserDetailsPage } from './user-details.page';
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserDetailsPageRoutingModule,
        HorsesPageModule
    ],
  declarations: [UserDetailsPage]
})
export class UserDetailsPageModule {}
