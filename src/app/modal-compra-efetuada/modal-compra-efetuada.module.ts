import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCompraEfetuadaPageRoutingModule } from './modal-compra-efetuada-routing.module';

import { ModalCompraEfetuadaPage } from './modal-compra-efetuada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCompraEfetuadaPageRoutingModule
  ],
  declarations: [ModalCompraEfetuadaPage]
})
export class ModalCompraEfetuadaPageModule {}
