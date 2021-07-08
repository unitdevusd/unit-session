import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpaceFeaturesPage } from './space-features.page';

describe('SpaceFeaturesPage', () => {
  let component: SpaceFeaturesPage;
  let fixture: ComponentFixture<SpaceFeaturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceFeaturesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpaceFeaturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
