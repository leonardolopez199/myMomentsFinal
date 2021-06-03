import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVivenciarMomentosPage } from './modal-vivenciar-momentos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVivenciarMomentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVivenciarMomentosPageRoutingModule {}
