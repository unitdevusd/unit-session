import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewEarningsPage } from './view-earnings.page';

describe('ViewEarningsPage', () => {
  let component: ViewEarningsPage;
  let fixture: ComponentFixture<ViewEarningsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEarningsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewEarningsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
