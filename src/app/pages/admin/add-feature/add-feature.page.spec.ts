import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFeaturePage } from './add-feature.page';

describe('AddFeaturePage', () => {
  let component: AddFeaturePage;
  let fixture: ComponentFixture<AddFeaturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeaturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFeaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
