import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSpacePageRoutingModule } from './edit-space-routing.module';

import { EditSpacePage } from './edit-space.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditSpacePageRoutingModule
  ],
  providers: [],
  declarations: [EditSpacePage]
})
export class EditSpacePageModule {}
