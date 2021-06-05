import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage {

  constructor(public modalController: ModalController, public navRoot: NavController, private router: Router) { }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  onClick() {
    let navigationExtras: NavigationExtras;
    //this.navRoot.navigateForward('detalhe-momento');
    navigationExtras = {
      state: {
        albumName: "Jackson Barreto",
        imageSrc: "../../assets/img/albuns/f01.jpg",
        time: "12:22",
        fotos: null,
        titulo: "Churrascada",
        data: "2021-07-18",
        descricao: "Confraternização de fim de semestre.",
        detalhes: "12MP 1440x720 22.4MB",
        tags: "Festa,Amigos"
      }
    };
    this.router.navigate(['detalhe-momento'], navigationExtras);
    this.dismiss();
  }

  onClick2() {
    let navigationExtras: NavigationExtras;
    //this.navRoot.navigateForward('detalhe-momento');
    navigationExtras = {
      state: {
        albumName: "Jackson Barreto",
        imageSrc: "../../assets/img/albuns/f01.jpg",
        time: "12:22",
        fotos: JSON.stringify([
          {
            "titulo": "a",
            "hora": "07:54",
            "data": "2021-06-15",
            "descricao": "Festa animada.",
            "detalhes": "0.8MP 1440x720 3.4MB",
            "tags": [
              "festa",
              "DCB"
            ],
            "src": "../../assets/img/albuns/f01.jpg"
          },
          {
            "titulo": "b",
            "hora": "07:54",
            "data": "2021-02-31",
            "descricao": "Festa animada.",
            "detalhes": "0.8MP 1440x720 3.4MB",
            "tags": [
              "festa",
              "DCB"
            ],
            "src": "../../assets/img/albuns/f02.jpg"
          }
        ]),
        titulo: "Churrascada",
        data: "2021-07-18",
        descricao: "Confraternização de fim de semestre.",
        detalhes: "12MP 1440x720 22.4MB",
        tags: "Festa,Amigos"
      }
    };
    this.router.navigate(['momentos'], navigationExtras);
    this.dismiss();
  }

}
