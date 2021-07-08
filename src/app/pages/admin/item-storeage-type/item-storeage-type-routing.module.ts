import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemStoreageTypePage } from './item-storeage-type.page';

const routes: Routes = [
  {
    path: '',
    component: ItemStoreageTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemStoreageTypePageRoutingModule {}
