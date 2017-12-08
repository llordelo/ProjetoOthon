import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TarefaPage } from '../tarefa/tarefa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
  /*NextPage(page) {
    console.log(event)
  }*/
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  nextPage() {
    this.navCtrl.push(TarefaPage);
  }

   items = [
     'Lista 1',
     'Lista 2',
     'Lista 3'
   ];

   itemSelected(item: string) {
     console.log("Selected Item", item);
     this.navCtrl.push(TarefaPage, {param1:item}); 
  }

}
