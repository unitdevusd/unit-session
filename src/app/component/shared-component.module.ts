import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitListingComponent } from './unit-listing/unit-listing.component';
import { SharedSpaceTypeSliderComponent } from './shared-space-type-slider/shared-space-type-slider.component';



@NgModule({
  declarations: [
    UnitListingComponent,
    SharedSpaceTypeSliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UnitListingComponent,
    SharedSpaceTypeSliderComponent
  ]
})
export class SharedComponentModule { }
