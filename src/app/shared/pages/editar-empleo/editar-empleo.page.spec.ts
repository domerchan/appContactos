import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarEmpleoPage } from './editar-empleo.page';

describe('EditarEmpleoPage', () => {
  let component: EditarEmpleoPage;
  let fixture: ComponentFixture<EditarEmpleoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEmpleoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarEmpleoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
