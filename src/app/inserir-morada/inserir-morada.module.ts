import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InserirMoradaPageRoutingModule } from './inserir-morada-routing.module';

import { InserirMoradaPage } from './inserir-morada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InserirMoradaPageRoutingModule
  ],
  declarations: [InserirMoradaPage]
})
export class InserirMoradaPageModule {}
