import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Information2PageRoutingModule } from './information2-routing.module';

import { Information2Page } from './information2.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Information2PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Information2Page]
})
export class Information2PageModule {}
