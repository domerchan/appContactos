import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpleoPage } from './empleo.page';

describe('EmpleoPage', () => {
  let component: EmpleoPage;
  let fixture: ComponentFixture<EmpleoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpleoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
