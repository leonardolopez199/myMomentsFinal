import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPartilhaPage } from './modal-partilha.page';

describe('ModalPartilhaPage', () => {
  let component: ModalPartilhaPage;
  let fixture: ComponentFixture<ModalPartilhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPartilhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPartilhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
