import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VivenciarMomentosPage } from './vivenciar-momentos.page';

const routes: Routes = [
  {
    path: '',
    component: VivenciarMomentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VivenciarMomentosPageRoutingModule {}
