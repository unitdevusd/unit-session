import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpacePublishPage } from './space-publish.page';

describe('SpacePublishPage', () => {
  let component: SpacePublishPage;
  let fixture: ComponentFixture<SpacePublishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacePublishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpacePublishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
