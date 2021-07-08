import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySpacesPageRoutingModule } from './my-spaces-routing.module';

import { MySpacesPage } from './my-spaces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MySpacesPageRoutingModule
  ],
  declarations: [MySpacesPage]
})
export class MySpacesPageModule {}
