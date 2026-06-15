import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { GerenciarFrutaPage } from './gerenciar-fruta.page';

import { GerenciarFrutaPageRoutingModule } from './gerenciar-fruta-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciarFrutaPageRoutingModule
  ],
  declarations: [GerenciarFrutaPage]
})
export class GerenciarFrutaPageModule {}

