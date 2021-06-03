import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-modal-compra-efetuada',
  templateUrl: './modal-compra-efetuada.page.html',
  styleUrls: ['./modal-compra-efetuada.page.scss'],
})
export class ModalCompraEfetuadaPage implements OnInit {

  constructor(public ctrl: NavController, public modalController: ModalController) { }

  ngOnInit() {
  }

  finalizarCompra(){
    this.ctrl.navigateRoot('pagina-inicial');
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
