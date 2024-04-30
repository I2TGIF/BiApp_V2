import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrevencioncuelloPage } from './prevencioncuello.page';

describe('PrevencioncuelloPage', () => {
  let component: PrevencioncuelloPage;
  let fixture: ComponentFixture<PrevencioncuelloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevencioncuelloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrevencioncuelloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
