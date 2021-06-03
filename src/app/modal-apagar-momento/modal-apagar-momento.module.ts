import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalApagarMomentoPageRoutingModule } from './modal-apagar-momento-routing.module';

import { ModalApagarMomentoPage } from './modal-apagar-momento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalApagarMomentoPageRoutingModule
  ],
  declarations: [ModalApagarMomentoPage]
})
export class ModalApagarMomentoPageModule {}
