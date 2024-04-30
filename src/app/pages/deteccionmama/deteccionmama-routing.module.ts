import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeteccionmamaPage } from './deteccionmama.page';

const routes: Routes = [
  {
    path: '',
    component: DeteccionmamaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeteccionmamaPageRoutingModule {}
