import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentoVideoPageRoutingModule } from './momento-video-routing.module';

import { MomentoVideoPage } from './momento-video.page';

import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentoVideoPageRoutingModule, ComponentsModule
  ],
  declarations: [MomentoVideoPage]
})
export class MomentoVideoPageModule {}
