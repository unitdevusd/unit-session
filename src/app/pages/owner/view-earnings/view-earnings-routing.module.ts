import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEarningsPage } from './view-earnings.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEarningsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEarningsPageRoutingModule {}
