import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentForExtensionPageRoutingModule } from './payment-for-extension-routing.module';

import { PaymentForExtensionPage } from './payment-for-extension.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentForExtensionPageRoutingModule
  ],
  declarations: [PaymentForExtensionPage]
})
export class PaymentForExtensionPageModule {}
