import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAppointmentActionPage } from './create-appointment-action.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAppointmentActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAppointmentActionPageRoutingModule {}
