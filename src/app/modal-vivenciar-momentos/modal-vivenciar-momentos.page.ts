import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-vivenciar-momentos',
  templateUrl: './modal-vivenciar-momentos.page.html',
  styleUrls: ['./modal-vivenciar-momentos.page.scss'],
})
export class ModalVivenciarMomentosPage implements OnInit {
    public video:boolean=false;

    public mostra1:boolean=true;
    public mostra2:boolean=false;

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

  public onSelectChange(event) :void{
    const selecionado=event.detail.value;
    if(selecionado == "video"){     
      this.video = true;
    }else if(selecionado == "foto"){      
      this.video = false;
    }
  }

  public comecaRegistar():void{
    document.getElementsByTagName('ion-modal')[0].classList.remove("modal-vivenciar-css");
    document.getElementsByTagName('ion-modal')[0].classList.add("modal-vivenciar-2-css");
    this.mostra1=false;
    this.mostra2=true;
  }

  public terminarVivenciarMomento():void{
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  public cancelar():void{
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
