import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HometriviaPage } from './hometrivia.page';

const routes: Routes = [
  {
    path: '',
    component: HometriviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HometriviaPageRoutingModule {}
