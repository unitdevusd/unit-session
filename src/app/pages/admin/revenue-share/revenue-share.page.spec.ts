import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RevenueSharePage } from './revenue-share.page';

describe('RevenueSharePage', () => {
  let component: RevenueSharePage;
  let fixture: ComponentFixture<RevenueSharePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueSharePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RevenueSharePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
