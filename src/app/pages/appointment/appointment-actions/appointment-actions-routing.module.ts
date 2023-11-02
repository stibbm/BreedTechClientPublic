import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentActionsPage } from './appointment-actions.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentActionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentActionsPageRoutingModule {}
