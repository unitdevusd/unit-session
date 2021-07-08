import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MySpacesPage } from './my-spaces.page';

describe('MySpacesPage', () => {
  let component: MySpacesPage;
  let fixture: ComponentFixture<MySpacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySpacesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MySpacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
