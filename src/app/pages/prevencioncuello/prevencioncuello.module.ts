import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevencioncuelloPageRoutingModule } from './prevencioncuello-routing.module';

import { PrevencioncuelloPage } from './prevencioncuello.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevencioncuelloPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PrevencioncuelloPage]
})
export class PrevencioncuelloPageModule {}
