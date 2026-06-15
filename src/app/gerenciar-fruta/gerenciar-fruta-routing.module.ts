import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciarFrutaPage } from './gerenciar-fruta.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciarFrutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciarFrutaPageRoutingModule {}
