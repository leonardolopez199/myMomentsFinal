import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MomentoVideoPage } from './momento-video.page';

describe('MomentoVideoPage', () => {
  let component: MomentoVideoPage;
  let fixture: ComponentFixture<MomentoVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentoVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MomentoVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
