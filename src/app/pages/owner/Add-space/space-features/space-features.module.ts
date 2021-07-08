import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceFeaturesPageRoutingModule } from './space-features-routing.module';

import { SpaceFeaturesPage } from './space-features.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaceFeaturesPageRoutingModule
  ],
  declarations: [SpaceFeaturesPage],
  providers: []
})
export class SpaceFeaturesPageModule {}
