import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InserirMoradaPageRoutingModule } from './inserir-morada-routing.module';

import { InserirMoradaPage } from './inserir-morada.page';
import {BrMaskerModule} from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InserirMoradaPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [InserirMoradaPage]
})
export class InserirMoradaPageModule {}
