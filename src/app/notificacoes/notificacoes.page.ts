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

  onClick(name: string, foto: string, title: string, date: string, description: string) {
    let navigationExtras: NavigationExtras;
    navigationExtras = {
      state: {
        albumName: name,
        imageSrc: "../../assets/img/albuns/" + foto,
        time: "12:22",
        fotos: null,
        titulo: title,
        data: date,
        descricao: description,
        detalhes: "12MP 1440x720 22.4MB",
        tags: "Festa,Amigos"
      }
    };
    this.router.navigate(['detalhe-momento'], navigationExtras);
    this.dismiss();
  }

  onClick2(albumName: string) {
    let navigationExtras: NavigationExtras;
    //this.navRoot.navigateForward('detalhe-momento');
    navigationExtras = {
      state: {
        albumName: albumName,
        imageSrc: "../../assets/img/albuns/f01.jpg",
        time: "12:22",
        fotos: JSON.stringify([
          {
            "titulo": "Protótipo de Alta Fidelidade do Leo",
            "hora": "07:54",
            "data": "1997-06-15",
            "descricao": "Baby Leo.",
            "detalhes": "0.8MP 1440x720 3.4MB",
            "tags": [
              "festa",
              "DCB"
            ],
            "src": "../../assets/img/albuns/f05.jpeg"
          },
          {
            "titulo": "Hidratação",
            "hora": "07:54",
            "data": "2021-02-31",
            "descricao": "Mantendo a vida em alta...",
            "detalhes": "0.8MP 1440x720 3.4MB",
            "tags": [
              "festa",
              "DCB"
            ],
            "src": "../../assets/img/albuns/f06.jpeg"
          },
          {
            "titulo": "Taberna Belga",
            "hora": "07:54",
            "data": "2020-08-17",
            "descricao": "Curtindo a vida na taberna belga.",
            "detalhes": "0.8MP 1440x720 3.4MB",
            "tags": [
              "festa",
              "DCB"
            ],
            "src": "../../assets/img/albuns/f07.jpeg"
          },
          {
            "titulo": "Delegação ENEI",
            "hora": "07:54",
            "data": "2019-02-17",
            "descricao": "Representando o IPVC no ENEI-Braga",
            "detalhes": "0.8MP 1440x720 3.4MB",
            "tags": [
              "festa",
              "DCB"
            ],
            "src": "../../assets/img/albuns/f08.jpeg"
          },
          {
            "titulo": "Sextouuuu",
            "hora": "07:54",
            "data": "2019-02-17",
            "descricao": "Liderança mundial.",
            "detalhes": "0.8MP 1440x720 3.4MB",
            "tags": [
              "festa",
              "DCB"
            ],
            "src": "../../assets/img/albuns/t02.png",
            "srcv": "../../assets/img/albuns/v02.mp4",
            "video": "true"
          }
        ]),
        titulo: "Bons momentos",
        data: "2021-07-18",
        descricao: "Minha Seleção festiva.",
        detalhes: "12MP 1440x720 22.4MB",
        tags: "Festa,Amigos"
      }
    };
    this.router.navigate(['momentos'], navigationExtras);
    this.dismiss();
  }

  onClick3(albumName: string) {
    let navigationExtras: NavigationExtras;
    //this.navRoot.navigateForward('detalhe-momento');
    navigationExtras = {
      state: {
        albumName: albumName,
        imageSrc: "../../assets/img/albuns/f01.jpg",
        time: "12:22",
        fotos: JSON.stringify([
          {
            "titulo": "Visual novo",
            "hora": "07:54",
            "data": "2021-06-15",
            "descricao": "Arrazando no Look",
            "detalhes": "0.8MP 1440x720 3.4MB",
            "tags": [
              "festa",
              "DCB"
            ],
            "src": "../../assets/img/albuns/f09.png"
          },
          {
            "titulo": "Niver da mami",
            "hora": "07:54",
            "data": "2021-02-31",
            "descricao": "Aniversário da mãe.",
            "detalhes": "0.8MP 1440x720 3.4MB",
            "tags": [
              "festa",
              "DCB"
            ],
            "src": "../../assets/img/albuns/f10.png"
          }

        ]),
        titulo: "Bons momentos",
        data: "2021-07-18",
        descricao: "Minha Seleção festiva.",
        detalhes: "12MP 1440x720 22.4MB",
        tags: "Festa,Amigos"
      }
    };
    this.router.navigate(['momentos'], navigationExtras);
    this.dismiss();
  }

}
