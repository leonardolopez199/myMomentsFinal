import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { TabsComponent } from '../components/tabs/tabs.component';
import { ModalApagarMomentoPage } from '../modal-apagar-momento/modal-apagar-momento.page';

import { ModalDetalheMomentoPage } from '../modal-detalhe-momento/modal-detalhe-momento.page';
import { ModalPartilhaPage } from '../modal-partilha/modal-partilha.page';


@Component({
  selector: 'app-detalhe-momento',
  templateUrl: './detalhe-momento.page.html',
  styleUrls: ['./detalhe-momento.page.scss'],
})
export class DetalheMomentoPage implements OnInit {

  public image: string;

  constructor(public modalController: ModalController, public ctrl: NavController, private router: Router) { 
    if (this.router.getCurrentNavigation().extras.state) {
      this.image = this.router.getCurrentNavigation().extras.state.imageSrc;
    }
  }

  ngOnInit() {
  }

  revelarMomentos() {
    this.ctrl.navigateForward('comprar');
  }

  async share() {
    const modal = await this.modalController.create({
      component: ModalPartilhaPage,
      cssClass: 'modal-vivenciar-css'
    });
    return await modal.present();
  }

  async presentModalDetalhesMomento() {
    const modal = await this.modalController.create({
      component: ModalDetalheMomentoPage,
      cssClass: "my-detal-moment-modal-css"
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
          this.ctrl.navigateForward("momentos");
        }
      });


    return await modal.present();
  }
}
