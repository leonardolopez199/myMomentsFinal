import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentoVideoPage } from './momento-video.page';

const routes: Routes = [
  {
    path: '',
    component: MomentoVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentoVideoPageRoutingModule {}
