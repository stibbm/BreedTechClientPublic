import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogCollectionPageRoutingModule } from './create-semen-collection-log-routing.module';

import { CreateSemenCollectionLogPage } from './create-semen-collection-log.page';
import {HorsesPageModule} from "../horses/horses.module";
import {
  CreateSemenCollectionLogInputComponent
} from "../../../components/inputs/create-semen-collection-log-input/create-semen-collection-log-input.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LogCollectionPageRoutingModule,
        HorsesPageModule
    ],
  declarations: [CreateSemenCollectionLogPage, CreateSemenCollectionLogInputComponent]
})
export class LogCollectionPageModule {}
