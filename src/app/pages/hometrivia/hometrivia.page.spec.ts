import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HometriviaPage } from './hometrivia.page';

describe('HometriviaPage', () => {
  let component: HometriviaPage;
  let fixture: ComponentFixture<HometriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HometriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
