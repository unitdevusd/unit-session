import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'unit-listing',
  templateUrl: './unit-listing.component.html',
  styleUrls: ['./unit-listing.component.scss'],
})
export class UnitListingComponent implements OnInit {
  slideOpts = { slidesPerView: 'auto', zoom: false, grabCursor: true };
  @Input() units;
  @Output() unitClicked = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  place(placeInfo){
    this.unitClicked.emit(placeInfo);
  }

}
