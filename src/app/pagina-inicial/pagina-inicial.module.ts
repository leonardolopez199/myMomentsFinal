import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaInicialPageRoutingModule } from './pagina-inicial-routing.module';

import { PaginaInicialPage } from './pagina-inicial.page';

//import { MediaItemComponent } from '../components/media-item/media-item.component';

//import { TabsComponent } from '../components/tabs/tabs.component';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaInicialPageRoutingModule, ComponentsModule    
  ],
  declarations: [PaginaInicialPage]
})
export class PaginaInicialPageModule { }
