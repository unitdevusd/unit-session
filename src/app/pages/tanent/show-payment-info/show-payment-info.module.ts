import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPaymentInfoPageRoutingModule } from './show-payment-info-routing.module';

import { ShowPaymentInfoPage } from './show-payment-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShowPaymentInfoPageRoutingModule
  ],
  declarations: [ShowPaymentInfoPage]
})
export class ShowPaymentInfoPageModule {}
