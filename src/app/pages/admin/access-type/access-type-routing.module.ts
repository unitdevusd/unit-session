import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessTypePage } from './access-type.page';

const routes: Routes = [
  {
    path: '',
    component: AccessTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessTypePageRoutingModule {}
