import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalheTarefaPage } from '../detalhe-tarefa/detalhe-tarefa';
import { HomePage } from '../home/home';
import { Tare } from '../../Tare';
import { Lista } from '../../Lista';

/**
 * Generated class for the TarefaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarefa',
  templateUrl: 'tarefa.html',
})
export class TarefaPage {
  tarefas = Tare[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    var parameter1:string;    
    HomePage.items.forEach(element => {
      if(element.name = parameter1){
        this.tarefas = element.tarefas;
      }
    });
    console.log(parameter1);
  }

  nextPage() {
    //this.navCtrl.push(DetalheTarefaPage);
    this.items.push("DEF");
  }

   itemSelected(item: string) {
     console.log("Selected Item", item);
     this.navCtrl.push(DetalheTarefaPage, {param1:item}); 
  }


}
