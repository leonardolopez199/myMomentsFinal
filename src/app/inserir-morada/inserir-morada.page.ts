import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-inserir-morada',
  templateUrl: './inserir-morada.page.html',
  styleUrls: ['./inserir-morada.page.scss'],
})
export class InserirMoradaPage implements OnInit {
  moradaForm: FormGroup;
  isSubmitted: boolean;

  constructor(public ctrl: NavController, public formBuilder: FormBuilder, public toastController:ToastController) { 
    this.isSubmitted = false;
  }
  ngOnInit() {
    this.moradaForm = this.formBuilder.group({
      descMorada: ['', [Validators.required , Validators.minLength(3)]],
      morada: ['', [Validators.required, Validators.minLength(5)]],
      codPostal: ['', [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{3}')]],
      cidade: ['', [Validators.required,Validators.pattern('^[a-zA-Z]')]],
      nome: ['', [Validators.required, , Validators.minLength(1)]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]{9}')]],
      contribuinte: ['', [Validators.required, Validators.pattern('^[0-9]{9}')]]
   });
  }

  public cancelar():void {
    this.ctrl.pop();
  }
  guardar(){
    this.addressInsertedToast();
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
      console.log(this.moradaForm.value);
      return false;
    } else {
      //this.guardar();
      //console.log(this.moradaForm.value);
    }
  }

  get formControls() { 
    return this.moradaForm.controls;
  }

}
