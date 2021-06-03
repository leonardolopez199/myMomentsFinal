import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheMomentoPageRoutingModule } from './detalhe-momento-routing.module';

import { DetalheMomentoPage } from './detalhe-momento.page';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheMomentoPageRoutingModule    , ComponentsModule
  ],
  declarations: [DetalheMomentoPage]
})
export class DetalheMomentoPageModule {}
