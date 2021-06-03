import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheMomentoPage } from './detalhe-momento.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheMomentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheMomentoPageRoutingModule {}
