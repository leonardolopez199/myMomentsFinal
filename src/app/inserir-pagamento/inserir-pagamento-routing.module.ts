import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InserirPagamentoPage } from './inserir-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: InserirPagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InserirPagamentoPageRoutingModule {}
