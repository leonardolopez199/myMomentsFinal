import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

import { ModalCompraEfetuadaPage } from '../modal-compra-efetuada/modal-compra-efetuada.page';

@Component({
  selector: 'app-dados-encomenda',
  templateUrl: './dados-encomenda.page.html',
  styleUrls: ['./dados-encomenda.page.scss'],
})
export class DadosEncomendaPage implements OnInit {

  constructor(private ctrl: NavController, public modalController:ModalController) { }

  ngOnInit() {
  }

  novaMorada(){
    this.ctrl.navigateForward('inserir-morada');
  }

  novaFormaPagamento(){
    this.ctrl.navigateForward('inserir-pagamento');
  }

  cancelar(){
    this.ctrl.pop();
  }

  async nextStep() {
    const modal = await this.modalController.create({
      component: ModalCompraEfetuadaPage,
      cssClass: 'modal-fim-compra-css'
    });
    return await modal.present();
  }

}
