import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosEncomendaPage } from './dados-encomenda.page';

describe('DadosEncomendaPage', () => {
  let component: DadosEncomendaPage;
  let fixture: ComponentFixture<DadosEncomendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosEncomendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosEncomendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
