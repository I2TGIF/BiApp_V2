import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Information2Page } from './information2.page';

describe('Information2Page', () => {
  let component: Information2Page;
  let fixture: ComponentFixture<Information2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Information2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Information2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
