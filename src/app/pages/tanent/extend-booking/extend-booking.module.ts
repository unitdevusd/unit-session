import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtendBookingPageRoutingModule } from './extend-booking-routing.module';

import { ExtendBookingPage } from './extend-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ExtendBookingPageRoutingModule
  ],
  declarations: [ExtendBookingPage]
})
export class ExtendBookingPageModule {}
