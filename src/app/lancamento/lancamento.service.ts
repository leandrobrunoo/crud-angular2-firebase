import { Lancamento } from './../core/lancamento';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class LancamentoService {

  lancamentos: AngularFireList<any>;

  constructor(
    private firebase: AngularFireDatabase
  ) { }

  listar() {
    this.lancamentos = this.firebase.list('lancamentos');
    return this.lancamentos;
  }

  cadastrar(lancamento: Lancamento) {
    this.lancamentos.push(lancamento);
  }

  atualizar(lancamento: Lancamento) {
    this.lancamentos.update(lancamento.$key,
      {
        descricao: lancamento.descricao,
        valor: lancamento.valor,
        dataVencimento: lancamento.dataVencimento,
        dataPagamento: lancamento.dataPagamento,
        movimentacao: lancamento.movimentacao,
        situacao: lancamento.situacao
      });
  }

  deletar($key: string) {
    this.lancamentos.remove($key);
  }

}
