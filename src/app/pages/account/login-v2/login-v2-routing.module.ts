import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginV2Page } from './login-v2.page';

const routes: Routes = [
  {
    path: '',
    component: LoginV2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginV2PageRoutingModule {}
