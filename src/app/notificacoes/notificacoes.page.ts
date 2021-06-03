import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage {

  constructor(public modalController: ModalController, public navRoot: NavController) { }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  onClick() {
    this.navRoot.navigateForward('detalhe-momento');
    this.dismiss();
  }

  onClick2() {
    this.navRoot.navigateForward('momentos');
    this.dismiss();
  }

}
