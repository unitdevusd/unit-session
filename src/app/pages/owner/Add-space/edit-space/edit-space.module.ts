import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSpacePageRoutingModule } from './edit-space-routing.module';

import { EditSpacePage } from './edit-space.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSpacePageRoutingModule
  ],
  declarations: [EditSpacePage]
})
export class EditSpacePageModule {}
