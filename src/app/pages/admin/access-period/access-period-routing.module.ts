import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessPeriodPage } from './access-period.page';

const routes: Routes = [
  {
    path: '',
    component: AccessPeriodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessPeriodPageRoutingModule {}
