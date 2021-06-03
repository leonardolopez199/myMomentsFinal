import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-search',
  templateUrl: './modal-search.page.html',
  styleUrls: ['./modal-search.page.scss'],
})
export class ModalSearchPage implements OnInit{
  public amigos: any;

  constructor(public modalController:ModalController) { 
   
    
  } 

  ngOnInit(){
  }

  dismiss() {
    this.modalController.dismiss({
     'dismissed': true
   });
  }
}
