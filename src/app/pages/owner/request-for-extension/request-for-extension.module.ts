import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestForExtensionPageRoutingModule } from './request-for-extension-routing.module';

import { RequestForExtensionPage } from './request-for-extension.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestForExtensionPageRoutingModule
  ],
  declarations: [RequestForExtensionPage]
})
export class RequestForExtensionPageModule {}
