import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpacePropertiesPage } from './space-properties.page';

const routes: Routes = [
  {
    path: '',
    component: SpacePropertiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpacePropertiesPageRoutingModule {}
