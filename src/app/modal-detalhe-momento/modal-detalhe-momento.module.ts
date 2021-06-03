import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDetalheMomentoPageRoutingModule } from './modal-detalhe-momento-routing.module';

import { ModalDetalheMomentoPage } from './modal-detalhe-momento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDetalheMomentoPageRoutingModule
  ],
  declarations: [ModalDetalheMomentoPage]
})
export class ModalDetalheMomentoPageModule {}
