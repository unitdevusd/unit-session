import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessPeriodPageRoutingModule } from './access-period-routing.module';

import { AccessPeriodPage } from './access-period.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessPeriodPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AccessPeriodPage]
})
export class AccessPeriodPageModule {}
