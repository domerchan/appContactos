import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaEmpleosPage } from './lista-empleos.page';

describe('ListaEmpleosPage', () => {
  let component: ListaEmpleosPage;
  let fixture: ComponentFixture<ListaEmpleosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEmpleosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEmpleosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
