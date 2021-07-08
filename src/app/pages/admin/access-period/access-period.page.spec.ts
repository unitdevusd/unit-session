import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccessPeriodPage } from './access-period.page';

describe('AccessPeriodPage', () => {
  let component: AccessPeriodPage;
  let fixture: ComponentFixture<AccessPeriodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessPeriodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessPeriodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
