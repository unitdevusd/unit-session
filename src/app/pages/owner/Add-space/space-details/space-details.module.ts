import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceDetailsPageRoutingModule } from './space-details-routing.module';

import { SpaceDetailsPage } from './space-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SpaceDetailsPageRoutingModule
  ],
  declarations: [SpaceDetailsPage]
})
export class SpaceDetailsPageModule {}
