import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckrPage } from './checkr.page';

const routes: Routes = [
  {
    path: '',
    component: CheckrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckrPageRoutingModule {}
