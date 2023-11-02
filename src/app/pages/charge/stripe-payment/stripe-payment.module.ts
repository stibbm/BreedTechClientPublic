import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StripePaymentPageRoutingModule } from './stripe-payment-routing.module';

import { StripePaymentPage } from './stripe-payment.page';
import {HorsesPageModule} from "../../horse/horses/horses.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StripePaymentPageRoutingModule,
        HorsesPageModule
    ],
  declarations: [StripePaymentPage]
})
export class StripePaymentPageModule {}
