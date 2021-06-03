import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InserirPagamentoPageRoutingModule } from './inserir-pagamento-routing.module';

import { InserirPagamentoPage } from './inserir-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InserirPagamentoPageRoutingModule
  ],
  declarations: [InserirPagamentoPage]
})
export class InserirPagamentoPageModule {}
