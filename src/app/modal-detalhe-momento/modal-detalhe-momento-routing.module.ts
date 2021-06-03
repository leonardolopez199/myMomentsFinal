import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDetalheMomentoPage } from './modal-detalhe-momento.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDetalheMomentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDetalheMomentoPageRoutingModule {}
