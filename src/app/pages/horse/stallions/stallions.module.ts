import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StallionsPageRoutingModule } from './stallions-routing.module';

import { StallionsPage } from './stallions.page';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {HorsesPageModule} from "../horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StallionsPageRoutingModule,
        MatTableModule,
        MatButtonModule,
        HorsesPageModule
    ],
  declarations: [StallionsPage]
})
export class StallionsPageModule {}
