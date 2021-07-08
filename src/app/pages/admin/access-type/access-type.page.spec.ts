import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccessTypePage } from './access-type.page';

describe('AccessTypePage', () => {
  let component: AccessTypePage;
  let fixture: ComponentFixture<AccessTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
