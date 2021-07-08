import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFeaturePageRoutingModule } from './add-feature-routing.module';

import { AddFeaturePage } from './add-feature.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFeaturePageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  declarations: [AddFeaturePage]
})
export class AddFeaturePageModule {}
