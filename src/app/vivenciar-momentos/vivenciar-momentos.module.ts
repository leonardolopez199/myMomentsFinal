import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VivenciarMomentosPageRoutingModule } from './vivenciar-momentos-routing.module';

import { VivenciarMomentosPage } from './vivenciar-momentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VivenciarMomentosPageRoutingModule
  ],
  declarations: [VivenciarMomentosPage]
})
export class VivenciarMomentosPageModule {}
