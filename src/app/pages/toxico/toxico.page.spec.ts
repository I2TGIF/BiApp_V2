import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToxicoPage } from './toxico.page';

describe('ToxicoPage', () => {
  let component: ToxicoPage;
  let fixture: ComponentFixture<ToxicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToxicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToxicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
