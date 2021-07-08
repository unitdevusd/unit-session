import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceFeaturesPage } from './space-features.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceFeaturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceFeaturesPageRoutingModule {}
