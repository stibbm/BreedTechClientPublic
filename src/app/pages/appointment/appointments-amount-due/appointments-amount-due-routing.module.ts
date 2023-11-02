import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsAmountDuePage } from './appointments-amount-due.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsAmountDuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsAmountDuePageRoutingModule {}
