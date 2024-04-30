import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlimentacionPage } from './alimentacion.page';

describe('AlimentacionPage', () => {
  let component: AlimentacionPage;
  let fixture: ComponentFixture<AlimentacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlimentacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
