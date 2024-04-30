import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevencioncuelloPage } from './prevencioncuello.page';

const routes: Routes = [
  {
    path: '',
    component: PrevencioncuelloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevencioncuelloPageRoutingModule {}
