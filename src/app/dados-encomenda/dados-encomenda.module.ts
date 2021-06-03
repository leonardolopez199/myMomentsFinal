import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosEncomendaPageRoutingModule } from './dados-encomenda-routing.module';

import { DadosEncomendaPage } from './dados-encomenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosEncomendaPageRoutingModule
  ],
  declarations: [DadosEncomendaPage]
})
export class DadosEncomendaPageModule {}
