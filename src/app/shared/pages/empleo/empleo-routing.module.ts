import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleoPage } from './empleo.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleoPageRoutingModule {}
