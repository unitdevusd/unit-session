import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevenueSharePageRoutingModule } from './revenue-share-routing.module';

import { RevenueSharePage } from './revenue-share.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevenueSharePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RevenueSharePage]
})
export class RevenueSharePageModule {}
