import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_DIRECTIVES } from './directive';




@NgModule({
  declarations: [...SHARED_DIRECTIVES],
  exports : [...SHARED_DIRECTIVES],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
