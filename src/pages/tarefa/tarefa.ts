import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalheTarefaPage } from '../detalhe-tarefa/detalhe-tarefa';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  parameter1:string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarefaPage');    
    this.parameter1 = this.navParams.get('param1');
    console.log(this.parameter1);
  }

  nextPage() {
    this.navCtrl.push(DetalheTarefaPage);
  }

   items = [
     'Tarefa 1',
     'Tarefa 2',
     'Tarefa 3'
   ];

   itemSelected(item: string) {
     console.log("Selected Item", item);
     this.navCtrl.push(DetalheTarefaPage, {param1:item}); 
  }


}
