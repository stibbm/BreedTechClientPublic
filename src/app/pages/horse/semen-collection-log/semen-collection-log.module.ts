import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemenCollectionLogPageRoutingModule } from './semen-collection-log-routing.module';

import { SemenCollectionLogPage } from './semen-collection-log.page';
import {MatTableModule} from "@angular/material/table";
import {HorsesPageModule} from "../horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SemenCollectionLogPageRoutingModule,
        MatTableModule,
        HorsesPageModule
    ],
  declarations: [SemenCollectionLogPage]
})
export class SemenCollectionLogPageModule {}
