import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorseDetailsPage } from './horse-details.page';

const routes: Routes = [
  {
    path: '',
    component: HorseDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorseDetailsPageRoutingModule {}
