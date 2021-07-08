import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpacePropertiesPage } from './space-properties.page';

describe('SpacePropertiesPage', () => {
  let component: SpacePropertiesPage;
  let fixture: ComponentFixture<SpacePropertiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacePropertiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpacePropertiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
