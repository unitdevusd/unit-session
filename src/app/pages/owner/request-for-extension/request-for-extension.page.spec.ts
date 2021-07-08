import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestForExtensionPage } from './request-for-extension.page';

describe('RequestForExtensionPage', () => {
  let component: RequestForExtensionPage;
  let fixture: ComponentFixture<RequestForExtensionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestForExtensionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestForExtensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
