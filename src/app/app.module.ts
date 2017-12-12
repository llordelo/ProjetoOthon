import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TarefaPage } from '../pages/tarefa/tarefa';
import { DetalheTarefaPage } from '../pages/detalhe-tarefa/detalhe-tarefa';
import { Tare } from '../Tare';
import { Lista } from '../Lista';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TarefaPage,
    DetalheTarefaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TarefaPage,
    DetalheTarefaPage,
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
