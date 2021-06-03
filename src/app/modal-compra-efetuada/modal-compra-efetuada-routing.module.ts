import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCompraEfetuadaPage } from './modal-compra-efetuada.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCompraEfetuadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCompraEfetuadaPageRoutingModule {}
