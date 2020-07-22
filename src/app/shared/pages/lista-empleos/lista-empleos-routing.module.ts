import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEmpleosPage } from './lista-empleos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEmpleosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEmpleosPageRoutingModule {}
