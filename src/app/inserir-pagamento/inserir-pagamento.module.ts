import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InserirPagamentoPageRoutingModule } from './inserir-pagamento-routing.module';

import { InserirPagamentoPage } from './inserir-pagamento.page';
import {BrMaskerModule} from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InserirPagamentoPageRoutingModule,
    BrMaskerModule
  ],
  declarations: [InserirPagamentoPage]
})
export class InserirPagamentoPageModule {}
