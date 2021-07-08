import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceDetailsPage } from './space-details.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceDetailsPageRoutingModule {}
