import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEarningsPageRoutingModule } from './view-earnings-routing.module';

import { ViewEarningsPage } from './view-earnings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEarningsPageRoutingModule
  ],
  declarations: [ViewEarningsPage]
})
export class ViewEarningsPageModule {}
