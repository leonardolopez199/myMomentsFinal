import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCompraEfetuadaPage } from './modal-compra-efetuada.page';

describe('ModalCompraEfetuadaPage', () => {
  let component: ModalCompraEfetuadaPage;
  let fixture: ComponentFixture<ModalCompraEfetuadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCompraEfetuadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCompraEfetuadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
