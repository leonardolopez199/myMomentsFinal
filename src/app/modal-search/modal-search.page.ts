import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.page.html',
  styleUrls: ['./modal-search.page.scss'],
})
export class ModalSearchPage implements OnInit {
  private medias: any;
  
  constructor(public modalController: ModalController, private router: Router, private navParam: NavParams) {


  }

  async ngOnInit() {
 
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  public search(): void {
    this.modalController.dismiss({
      'dismissed': true
    }); 
      let navigationExtras: NavigationExtras;

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
  }
}
