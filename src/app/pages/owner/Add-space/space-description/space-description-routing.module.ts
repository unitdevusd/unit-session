import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceDescriptionPage } from './space-description.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceDescriptionPageRoutingModule {}
