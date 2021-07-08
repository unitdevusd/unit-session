import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySpacesPage } from './my-spaces.page';

const routes: Routes = [
  {
    path: '',
    component: MySpacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySpacesPageRoutingModule {}
