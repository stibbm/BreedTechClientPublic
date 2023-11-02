import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingAppointmentActionsPage } from './upcoming-appointment-actions.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingAppointmentActionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingAppointmentActionsPageRoutingModule {}
