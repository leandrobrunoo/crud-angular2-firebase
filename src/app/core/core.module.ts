import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoService } from './../lancamento/lancamento.service';

@NgModule({
  imports: [
    CommonModule

  ],
  exports: [],
  declarations: [],
  providers: [LancamentoService]
})
export class CoreModule { }
