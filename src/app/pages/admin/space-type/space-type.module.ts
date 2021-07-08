import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceTypePageRoutingModule } from './space-type-routing.module';

import { SpaceTypePage } from './space-type.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaceTypePageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  declarations: [SpaceTypePage]
})
export class SpaceTypePageModule {}
