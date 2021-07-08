import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckrPage } from './checkr.page';

describe('CheckrPage', () => {
  let component: CheckrPage;
  let fixture: ComponentFixture<CheckrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
