import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevenueSharePage } from './revenue-share.page';

const routes: Routes = [
  {
    path: '',
    component: RevenueSharePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevenueSharePageRoutingModule {}
