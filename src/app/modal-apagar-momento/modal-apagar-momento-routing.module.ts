import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalApagarMomentoPage } from './modal-apagar-momento.page';

const routes: Routes = [
  {
    path: '',
    component: ModalApagarMomentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalApagarMomentoPageRoutingModule {}
