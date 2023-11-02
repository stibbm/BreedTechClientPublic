import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateStallionContractPage } from './create-stallion-contract.page';

const routes: Routes = [
  {
    path: '',
    component: CreateStallionContractPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateStallionContractPageRoutingModule {}
