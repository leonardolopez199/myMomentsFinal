import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPartilhaPageRoutingModule } from './modal-partilha-routing.module';

import { ModalPartilhaPage } from './modal-partilha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPartilhaPageRoutingModule
  ],
  declarations: [ModalPartilhaPage]
})
export class ModalPartilhaPageModule {}
