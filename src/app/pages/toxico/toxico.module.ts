import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToxicoPageRoutingModule } from './toxico-routing.module';

import { ToxicoPage } from './toxico.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToxicoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ToxicoPage]
})
export class ToxicoPageModule {}
