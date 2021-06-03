import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVivenciarMomentosPageRoutingModule } from './modal-vivenciar-momentos-routing.module';

import { ModalVivenciarMomentosPage } from './modal-vivenciar-momentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVivenciarMomentosPageRoutingModule
  ],
  declarations: [ModalVivenciarMomentosPage]
})
export class ModalVivenciarMomentosPageModule {}
