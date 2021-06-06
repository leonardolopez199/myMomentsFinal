import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-inserir-morada',
  templateUrl: './inserir-morada.page.html',
  styleUrls: ['./inserir-morada.page.scss'],
})
export class InserirMoradaPage implements OnInit {
  moradaForm: FormGroup;
  isSubmitted: boolean;

  constructor(public ctrl: NavController, public formBuilder: FormBuilder, public toastController:ToastController, private router: Router) { 
    this.isSubmitted = false;
  }
  ngOnInit() {
    this.moradaForm = this.formBuilder.group({
      descMorada: ['', [Validators.required , Validators.minLength(3)]],
      morada: ['', [Validators.required, Validators.minLength(5)]],
      codPostal: ['', [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{3}')]],
      cidade: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      nome: ['', [Validators.required, , Validators.minLength(1)]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]{3} [0-9]{3} [0-9]{3}')]]/*,
      contribuinte: ['', [Validators.required, Validators.pattern('^[0-9]{9}')]]*/
   });
  }

  public cancelar():void {
    this.ctrl.pop();
  }
  guardar(){
    
    this.ctrl.pop();
  }

  async addressInsertedToast() {
    const toast = await this.toastController.create({
      message: 'Morada inserida com sucesso.',
      duration: 2000
    });
    toast.present();
  }

  public submitForm() {
    this.isSubmitted = true;
    if (!this.moradaForm.valid) {
      return false;
    } else {
      let navigationExtras: NavigationExtras;
        navigationExtras = {
          state: {
            "pagina": "Morada",
            dadosM: this.moradaForm.value
          }
        };
        this.addressInsertedToast();
        this.router.navigate(['dados-encomenda'], navigationExtras);
    }
  }

  get formControls() { 
    return this.moradaForm.controls;
  }

}
