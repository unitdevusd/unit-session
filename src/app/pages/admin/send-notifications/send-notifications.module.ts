import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendNotificationsPageRoutingModule } from './send-notifications-routing.module';

import { SendNotificationsPage } from './send-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SendNotificationsPageRoutingModule
  ],
  declarations: [SendNotificationsPage]
})
export class SendNotificationsPageModule {}
