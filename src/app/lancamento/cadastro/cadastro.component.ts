import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LancamentoService } from './../lancamento.service';
import { Lancamento } from './../../core/lancamento';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  lancamento = new Lancamento();

  constructor(
    private lancamentoService: LancamentoService
  ) { }

  ngOnInit() {}

  salvar(f: NgForm) {
   this.lancamentoService.cadastrar(f.value);
   f.resetForm();
  }
}
