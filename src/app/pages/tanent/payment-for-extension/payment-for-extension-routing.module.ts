import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentForExtensionPage } from './payment-for-extension.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentForExtensionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentForExtensionPageRoutingModule {}
