import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckrPageRoutingModule } from './checkr-routing.module';

import { CheckrPage } from './checkr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CheckrPageRoutingModule
  ],
  declarations: [CheckrPage]
})
export class CheckrPageModule {}
