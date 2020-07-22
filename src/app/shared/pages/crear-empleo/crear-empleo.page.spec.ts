import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearEmpleoPage } from './crear-empleo.page';

describe('CrearEmpleoPage', () => {
  let component: CrearEmpleoPage;
  let fixture: ComponentFixture<CrearEmpleoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEmpleoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearEmpleoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
