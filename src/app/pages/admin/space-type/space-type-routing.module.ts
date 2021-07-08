import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceTypePage } from './space-type.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceTypePageRoutingModule {}
