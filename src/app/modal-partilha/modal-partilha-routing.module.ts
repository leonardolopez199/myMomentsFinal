import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPartilhaPage } from './modal-partilha.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPartilhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPartilhaPageRoutingModule {}
