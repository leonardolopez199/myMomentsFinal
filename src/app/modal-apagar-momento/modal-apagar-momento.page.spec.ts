import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalApagarMomentoPage } from './modal-apagar-momento.page';

describe('ModalApagarMomentoPage', () => {
  let component: ModalApagarMomentoPage;
  let fixture: ComponentFixture<ModalApagarMomentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalApagarMomentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalApagarMomentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
