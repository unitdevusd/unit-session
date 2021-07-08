import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpacePropertiesPageRoutingModule } from './space-properties-routing.module';

import { SpacePropertiesPage } from './space-properties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacePropertiesPageRoutingModule
  ],
  declarations: [SpacePropertiesPage]
})
export class SpacePropertiesPageModule {}
