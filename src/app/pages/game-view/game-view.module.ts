import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameViewPageRoutingModule } from './game-view-routing.module';

import { GameViewPage } from './game-view.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    GameViewPageRoutingModule
  ],
  declarations: [GameViewPage]
})
export class GameViewPageModule {}
