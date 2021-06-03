import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalVivenciarMomentosPage } from './modal-vivenciar-momentos.page';

describe('ModalVivenciarMomentosPage', () => {
  let component: ModalVivenciarMomentosPage;
  let fixture: ComponentFixture<ModalVivenciarMomentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVivenciarMomentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalVivenciarMomentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
