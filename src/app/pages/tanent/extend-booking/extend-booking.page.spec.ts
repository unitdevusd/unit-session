import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExtendBookingPage } from './extend-booking.page';

describe('ExtendBookingPage', () => {
  let component: ExtendBookingPage;
  let fixture: ComponentFixture<ExtendBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendBookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExtendBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
