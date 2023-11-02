import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllAppointmentsActionsPage } from './all-appointments-actions.page';

const routes: Routes = [
  {
    path: '',
    component: AllAppointmentsActionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllAppointmentsActionsPageRoutingModule {}
