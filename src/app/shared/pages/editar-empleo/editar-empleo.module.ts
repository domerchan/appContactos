import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarEmpleoPageRoutingModule } from './editar-empleo-routing.module';

import { EditarEmpleoPage } from './editar-empleo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarEmpleoPageRoutingModule
  ],
  declarations: [EditarEmpleoPage]
})
export class EditarEmpleoPageModule {}
