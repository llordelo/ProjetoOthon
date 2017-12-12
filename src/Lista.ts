import { Tare } from './Tare';
import { NgModule } from '@angular/core';

export class Lista{
    nome:string;
    tarefas :Tare[];

    constructor(nome:string, tarefas:Tare[]){
        this.nome = nome;
        this.tarefas = tarefas;
    }
}