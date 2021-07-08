import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemStoreageTypePage } from './item-storeage-type.page';

describe('ItemStoreageTypePage', () => {
  let component: ItemStoreageTypePage;
  let fixture: ComponentFixture<ItemStoreageTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemStoreageTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemStoreageTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
