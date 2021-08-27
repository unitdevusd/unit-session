import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnitListingComponent } from './unit-listing.component';

describe('UnitListingComponent', () => {
  let component: UnitListingComponent;
  let fixture: ComponentFixture<UnitListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitListingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
