import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirMoradaPage } from './inserir-morada.page';

describe('InserirMoradaPage', () => {
  let component: InserirMoradaPage;
  let fixture: ComponentFixture<InserirMoradaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirMoradaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirMoradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
