import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceDescriptionPageRoutingModule } from './space-description-routing.module';

import { SpaceDescriptionPage } from './space-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SpaceDescriptionPageRoutingModule
  ],
  declarations: [SpaceDescriptionPage]
})
export class SpaceDescriptionPageModule {}
