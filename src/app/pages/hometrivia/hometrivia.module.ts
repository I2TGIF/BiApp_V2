import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HometriviaPageRoutingModule } from './hometrivia-routing.module';

import { HometriviaPage } from './hometrivia.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HometriviaPageRoutingModule,
    ComponentsModule,
  
  ],
  declarations: [HometriviaPage]
})
export class HometriviaPageModule {}
