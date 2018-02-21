import { Component, OnInit } from '@angular/core';

import { LancamentoService } from './../lancamento.service';
import { Lancamento } from './../../core/lancamento';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lancamentos: Lancamento[];

  constructor(
    private lancamentoService: LancamentoService
  ) { }

  ngOnInit() {

    const x = this.lancamentoService.listar();
    x.snapshotChanges().subscribe(item => {
      this.lancamentos = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y[ '$key' ] = element.key;
        this.lancamentos.push(y as Lancamento);
      });
    });

  }

}
