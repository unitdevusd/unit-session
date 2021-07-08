import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpaceTypePage } from './space-type.page';

describe('SpaceTypePage', () => {
  let component: SpaceTypePage;
  let fixture: ComponentFixture<SpaceTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpaceTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
