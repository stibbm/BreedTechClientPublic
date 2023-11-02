import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateChargePage } from './create-charge.page';

const routes: Routes = [
  {
    path: '',
    component: CreateChargePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateChargePageRoutingModule {}
