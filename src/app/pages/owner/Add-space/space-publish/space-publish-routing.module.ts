import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpacePublishPage } from './space-publish.page';

const routes: Routes = [
  {
    path: '',
    component: SpacePublishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacePublishPageRoutingModule {}
