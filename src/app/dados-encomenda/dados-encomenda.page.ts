import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalCompraEfetuadaPage } from '../modal-compra-efetuada/modal-compra-efetuada.page';

@Component({
  selector: 'app-dados-encomenda',
  templateUrl: './dados-encomenda.page.html',
  styleUrls: ['./dados-encomenda.page.scss'],
})
export class DadosEncomendaPage implements OnInit {
  public dados: any;
  public moradas: any[] = [];
  public formas_Pagamento: any[] = [];

  constructor(private ctrl: NavController, public modalController: ModalController, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.dados = this.router.getCurrentNavigation().extras.state;
        this.guardaDados();
      }
    });
  }

  ngOnInit() {
    this.moradas.push({
      "titulo": "ESTG",
      "morada": "Avenida do Atlântico",
    });
    this.formas_Pagamento.push({
      "icone": "card-outline",
      "principal": "**** **** **** 9874"
    });
  }

  public novaMorada():void {
    this.ctrl.navigateForward('inserir-morada');
  }

  public novaFormaPagamento():void {
    this.ctrl.navigateForward('inserir-pagamento');
  }

  public cancelar():void {
    this.ctrl.pop();
  }

  async nextStep() {
    const modal = await this.modalController.create({
      component: ModalCompraEfetuadaPage,
      cssClass: 'modal-fim-compra-css'
    });
    return await modal.present();
  }
  public guardaDados(): void {
    if (this.dados.pagina == "FM") {
      switch (this.dados.forma) {
        case "cartao":
          var lastFour = this.dados.dadosFM.cartao.substr(this.dados.dadosFM.cartao.length - 4);
          this.formas_Pagamento.push({
            "icone": "card-outline",
            "principal": "**** **** **** "+lastFour
          });
          break;
        case "paypal":          
          this.formas_Pagamento.push({
            "icone": "logo-paypal",
            "principal": this.dados.dadosFM.email
          });
          break;
        case "mbway":
          this.formas_Pagamento.push({
            "icone": "phone-portrait-outline",
            "principal": this.dados.dadosFM.telefone
          });
          break;
      }
    } else {
      this.moradas.push({
        "titulo": this.dados.dadosM.descMorada,
        "morada": this.dados.dadosM.morada,
      });
    }

  }
}
