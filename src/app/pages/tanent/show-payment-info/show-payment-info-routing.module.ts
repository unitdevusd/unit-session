import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowPaymentInfoPage } from './show-payment-info.page';

const routes: Routes = [
  {
    path: '',
    component: ShowPaymentInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowPaymentInfoPageRoutingModule {}
