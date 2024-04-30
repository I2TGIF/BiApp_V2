import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeteccionmamaPage } from './deteccionmama.page';

describe('DeteccionmamaPage', () => {
  let component: DeteccionmamaPage;
  let fixture: ComponentFixture<DeteccionmamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeteccionmamaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeteccionmamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
