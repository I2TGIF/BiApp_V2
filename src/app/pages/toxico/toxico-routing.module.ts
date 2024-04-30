import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToxicoPage } from './toxico.page';

const routes: Routes = [
  {
    path: '',
    component: ToxicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToxicoPageRoutingModule {}
