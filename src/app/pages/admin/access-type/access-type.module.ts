import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessTypePageRoutingModule } from './access-type-routing.module';

import { AccessTypePage } from './access-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessTypePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AccessTypePage]
})
export class AccessTypePageModule {}
