import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inserir-pagamento',
  templateUrl: './inserir-pagamento.page.html',
  styleUrls: ['./inserir-pagamento.page.scss'],
})
export class InserirPagamentoPage implements OnInit {
  public mySelect: any="";
  public cartao: boolean = false;
  public paypal: boolean = false;
  public mbway: boolean = false;

  constructor(public ctrl: NavController, public toastController: ToastController) { }

  ngOnInit() {
  }

  onSelectChange(event) {
    this.mySelect = event.target.value;
    switch (this.mySelect) {
      case 'cartao': {
        this.allFalse();
        this.cartao=true;
        break;
      }
      case 'paypal': {
        this.allFalse();
        this.paypal=true;
        break;
      }
      case 'mbway': {
        this.allFalse();
        this.mbway=true;
        break;
      }
    }
  }

  allFalse() {
    this.cartao = false;
    this.paypal = false;
    this.mbway = false;
  }
  cancelar(){
    this.ctrl.pop();
  }
  guardar(){
    this.paymentInsertedToast();
    this.ctrl.pop();
  }
  async paymentInsertedToast() {
    const toast = await this.toastController.create({
      message: 'Forma de pagamento inserida com sucesso.',
      duration: 2000
    });
    toast.present();
  }
}
