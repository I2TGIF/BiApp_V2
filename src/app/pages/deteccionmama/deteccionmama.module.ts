import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeteccionmamaPageRoutingModule } from './deteccionmama-routing.module';

import { DeteccionmamaPage } from './deteccionmama.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeteccionmamaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DeteccionmamaPage]
})
export class DeteccionmamaPageModule {}
