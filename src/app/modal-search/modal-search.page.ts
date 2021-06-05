import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.page.html',
  styleUrls: ['./modal-search.page.scss'],
})
export class ModalSearchPage implements OnInit {
  private album: any;
  constructor(public modalController: ModalController, private router: Router, private navParam: NavParams) {


  }

  ngOnInit() {
    this.album = this.navParam.data.data;
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
    let max = Math.floor(Math.random() * (16 - 1 + 1) + 1)
    let navigationExtras: NavigationExtras;
      navigationExtras = {
        state: {
          albumName: this.album.albumName,
          imageSrc: this.album.imageSrc,
          time: this.album.time,
          sliceStart: 0,
          sliceEnd: max
        }
      };
      this.router.navigate(['momentos'], navigationExtras);
  }
}
