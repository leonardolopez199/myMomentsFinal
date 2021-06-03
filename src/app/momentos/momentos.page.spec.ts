import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MomentosPage } from './momentos.page';

describe('MomentosPage', () => {
  let component: MomentosPage;
  let fixture: ComponentFixture<MomentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MomentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
