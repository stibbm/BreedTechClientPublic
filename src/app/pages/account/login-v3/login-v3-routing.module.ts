import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginV3Page } from './login-v3.page';

const routes: Routes = [
  {
    path: '',
    component: LoginV3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginV3PageRoutingModule {}
