import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StallsPage } from './stalls.page';

const routes: Routes = [
  {
    path: '',
    component: StallsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StallsPageRoutingModule {}
