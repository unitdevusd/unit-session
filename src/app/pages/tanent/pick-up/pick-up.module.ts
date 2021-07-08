import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickUpPageRoutingModule } from './pick-up-routing.module';

import { PickUpPage } from './pick-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PickUpPageRoutingModule
  ],
  declarations: [PickUpPage]
})
export class PickUpPageModule {}
