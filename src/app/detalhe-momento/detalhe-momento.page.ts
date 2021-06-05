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
  public description: string;
  public date: string;
  public details: string;
  public time: string;
  public title: string;
  public tags: string[];
  public video: boolean;
  public srcv: string;
  constructor(public modalController: ModalController, public ctrl: NavController, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.image = this.router.getCurrentNavigation().extras.state.imageSrc;
      this.description = this.router.getCurrentNavigation().extras.state.descricao;
      this.date = this.router.getCurrentNavigation().extras.state.data;
      this.details = this.router.getCurrentNavigation().extras.state.detalhes;
      this.time = this.router.getCurrentNavigation().extras.state.time;
      this.title = this.router.getCurrentNavigation().extras.state.titulo;
      this.tags = this.router.getCurrentNavigation().extras.state.tags.split(',');
      this.video = this.router.getCurrentNavigation().extras.state.video == "true" ? true : false;
      this.srcv = this.router.getCurrentNavigation().extras.state.srcv;
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
      cssClass: "my-detal-moment-modal-css",
      componentProps: {
        description: this.description,
        date: this.date,
        details: this.details,
        time: this.time,
        title: this.title,
        tags: this.tags,
        video: this.video
      }
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
