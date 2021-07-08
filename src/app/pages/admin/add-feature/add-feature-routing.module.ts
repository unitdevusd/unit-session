import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFeaturePage } from './add-feature.page';

const routes: Routes = [
  {
    path: '',
    component: AddFeaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFeaturePageRoutingModule {}
