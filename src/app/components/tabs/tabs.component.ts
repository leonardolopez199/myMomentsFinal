import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { ModalApagarMomentoPage } from 'src/app/modal-apagar-momento/modal-apagar-momento.page';
import { ModalPartilhaPage } from 'src/app/modal-partilha/modal-partilha.page';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  private subjectDeleteAction: Subject<boolean>;
  private subjectPreDeleteAction: Subject<boolean>;
  private subjectPreShare: Subject<boolean>;

  constructor(public ctrl: NavController, public router: Router, public modalController: ModalController) {
    this.subjectDeleteAction = new Subject();
    this.subjectPreDeleteAction = new Subject();
    this.subjectPreShare = new Subject();
  }

  ngOnInit() { }

  revelarMomentos() {
    this.ctrl.navigateForward('comprar');
  }

  public getSubjectDeleteAction(): Subject<boolean> {
    return this.subjectDeleteAction;
  }

  public deleteItem(): void {
    this.subjectDeleteAction.next(true);
  }

  public getPresubjectDeleteAction(): Subject<boolean> {
    return this.subjectPreDeleteAction;
  }

  public preRemoveItem(): void {
    this.subjectPreDeleteAction.next(true);
  }

  public getPreSubjectShare(): Subject<boolean> {
    return this.subjectPreShare;
  }

  public preShare(): void {
    this.subjectPreShare.next(true);

  }

  async share() {
    const modal = await this.modalController.create({
      component: ModalPartilhaPage,
      cssClass: 'modal-partilhar-css'
    });
    return await modal.present();
  }

  async apagar() {
    const modal = await this.modalController.create({
      component: ModalApagarMomentoPage,
      cssClass: 'modal-apagar-css'
    });
    modal.onDidDismiss()
      .then((data) => {
        const response = data['data']; // Here's your selected user!
        if (response == "ok") {
          this.deleteItem();
        }
      });


    return await modal.present();
  }

}