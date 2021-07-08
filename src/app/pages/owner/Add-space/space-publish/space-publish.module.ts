import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpacePublishPageRoutingModule } from './space-publish-routing.module';

import { SpacePublishPage } from './space-publish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpacePublishPageRoutingModule
  ],
  declarations: [SpacePublishPage]
})
export class SpacePublishPageModule {}
