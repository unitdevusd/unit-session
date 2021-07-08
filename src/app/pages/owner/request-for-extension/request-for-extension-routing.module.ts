import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestForExtensionPage } from './request-for-extension.page';

const routes: Routes = [
  {
    path: '',
    component: RequestForExtensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestForExtensionPageRoutingModule {}
