import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentosPageRoutingModule } from './momentos-routing.module';

import { MomentosPage } from './momentos.page';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentosPageRoutingModule, ComponentsModule
  ],
  declarations: [MomentosPage]
})
export class MomentosPageModule { }
