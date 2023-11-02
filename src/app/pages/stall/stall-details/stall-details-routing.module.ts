import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StallDetailsPage } from './stall-details.page';

const routes: Routes = [
  {
    path: '',
    component: StallDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StallDetailsPageRoutingModule {}
