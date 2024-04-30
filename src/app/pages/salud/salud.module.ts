import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaludPageRoutingModule } from './salud-routing.module';

import { SaludPage } from './salud.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaludPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SaludPage]
})
export class SaludPageModule {}
