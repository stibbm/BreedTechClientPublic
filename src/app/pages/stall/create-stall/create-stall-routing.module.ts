import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateStallPage } from './create-stall.page';

const routes: Routes = [
  {
    path: '',
    component: CreateStallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateStallPageRoutingModule {}
