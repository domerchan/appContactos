import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleoPageRoutingModule } from './empleo-routing.module';

import { EmpleoPage } from './empleo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleoPageRoutingModule
  ],
  declarations: [EmpleoPage]
})
export class EmpleoPageModule {}
