import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateStallionContractPageRoutingModule } from './create-stallion-contract-routing.module';

import { CreateStallionContractPage } from './create-stallion-contract.page';
import {HorsesPageModule} from "../horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CreateStallionContractPageRoutingModule,
        HorsesPageModule
    ],
  declarations: [CreateStallionContractPage]
})
export class CreateStallionContractPageModule {}
