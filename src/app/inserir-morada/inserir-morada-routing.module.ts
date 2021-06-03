import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InserirMoradaPage } from './inserir-morada.page';

const routes: Routes = [
  {
    path: '',
    component: InserirMoradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InserirMoradaPageRoutingModule {}
