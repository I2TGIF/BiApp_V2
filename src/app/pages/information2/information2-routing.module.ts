import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Information2Page } from './information2.page';

const routes: Routes = [
  {
    path: '',
    component: Information2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Information2PageRoutingModule {}
