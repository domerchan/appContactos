import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearEmpleoPage } from './crear-empleo.page';

const routes: Routes = [
  {
    path: '',
    component: CrearEmpleoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearEmpleoPageRoutingModule {}
