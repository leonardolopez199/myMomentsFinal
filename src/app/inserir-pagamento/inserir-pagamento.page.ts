import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-inserir-pagamento',
  templateUrl: './inserir-pagamento.page.html',
  styleUrls: ['./inserir-pagamento.page.scss'],
})
export class InserirPagamentoPage implements OnInit {
  public mySelect: any = "";
  public cartao: boolean = false;
  public paypal: boolean = false;
  public mbway: boolean = false;
  cartaoForm: FormGroup;
  isSubmittedCartao: boolean;

  paypalForm: FormGroup;
  isSubmittedPaypal: boolean;

  mbWayForm: FormGroup;
  isSubmittedmbWay: boolean;

  public minDate: string;
  constructor(public ctrl: NavController, public toastController: ToastController, public formBuilder: FormBuilder, private router: Router) {
    this.isSubmittedCartao = false;
    this.isSubmittedPaypal = false;
    this.isSubmittedmbWay = false;
  }

  ngOnInit() {
    this.cartaoForm = this.formBuilder.group({
      cartao: ['', [Validators.required, Validators.pattern('^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}')]],
      validade: ['', [Validators.required, Validators.pattern('^[0-9]{2}/[0-9]{4}')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}')]]
    });
    this.paypalForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      senha: ['', [Validators.required]]
    });
    this.mbWayForm = this.formBuilder.group({
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]{3} [0-9]{3} [0-9]{3}')]]
    });

    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    this.minDate = [year, month, day].join('-');
    console.log(this.minDate);
  }

  onSelectChange(event) {
    this.mySelect = event.target.value;
    switch (this.mySelect) {
      case 'cartao': {
        this.allFalse();
        this.cartao = true;
        break;
      }
      case 'paypal': {
        this.allFalse();
        this.paypal = true;
        break;
      }
      case 'mbway': {
        this.allFalse();
        this.mbway = true;
        break;
      }
    }
  }

  allFalse() {
    this.cartao = false;
    this.paypal = false;
    this.mbway = false;
  }
  cancelar() {
    this.ctrl.pop();
  }
  guardar() {
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

  public submitForm() {
    if (this.cartao) {
      this.isSubmittedCartao = true;
      if (!this.cartaoForm.valid) {
        return false;
      } else {
        let navigationExtras: NavigationExtras;
        navigationExtras = {
          state: {
            "pagina": "FM",
            "forma":"cartao",
            dadosFM: this.cartaoForm.value
          }
        };

        this.paymentInsertedToast();
        this.router.navigate(['dados-encomenda'], navigationExtras);
      }
    } else if (this.paypal) {
      this.isSubmittedPaypal = true;
      if (!this.paypalForm.valid) {
        return false;
      } else {
        let navigationExtras: NavigationExtras;
        navigationExtras = {
          state: {
            "pagina": "FM",
            "forma":"paypal",
            dadosFM: this.paypalForm.value
          }
        };
        
        this.paymentInsertedToast();
        this.router.navigate(['dados-encomenda'], navigationExtras);
      }
    } else if (this.mbway) {
      this.isSubmittedmbWay = true;
      if (!this.mbWayForm.valid) {
        return false;
      } else {
        let navigationExtras: NavigationExtras;
        navigationExtras = {
          state: {
            "pagina": "FM",
            "forma":"mbway",
            dadosFM: this.mbWayForm.value
          }
        };
        this.paymentInsertedToast();
        this.router.navigate(['dados-encomenda'], navigationExtras);
      }
    }

  }
  public selecionado(): boolean {
    return !(this.cartao || this.paypal || this.mbway);
  }

  get cartaoformControls() {
    return this.cartaoForm.controls;
  }
  get paypalformControls() {
    return this.paypalForm.controls;
  }
  get mbwayformControls() {
    return this.mbWayForm.controls;
  }

}
