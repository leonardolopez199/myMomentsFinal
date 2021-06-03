import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalDetalheMomentoPage } from './modal-detalhe-momento.page';

describe('ModalDetalheMomentoPage', () => {
  let component: ModalDetalheMomentoPage;
  let fixture: ComponentFixture<ModalDetalheMomentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetalheMomentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDetalheMomentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
