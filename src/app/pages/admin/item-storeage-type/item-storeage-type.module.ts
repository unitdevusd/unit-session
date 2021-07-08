import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemStoreageTypePageRoutingModule } from './item-storeage-type-routing.module';

import { ItemStoreageTypePage } from './item-storeage-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ItemStoreageTypePageRoutingModule
  ],
  declarations: [ItemStoreageTypePage]
})
export class ItemStoreageTypePageModule {}
