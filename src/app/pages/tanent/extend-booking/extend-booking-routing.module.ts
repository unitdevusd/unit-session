import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtendBookingPage } from './extend-booking.page';

const routes: Routes = [
  {
    path: '',
    component: ExtendBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtendBookingPageRoutingModule {}
