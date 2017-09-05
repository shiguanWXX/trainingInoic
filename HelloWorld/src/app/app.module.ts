import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeroComponent } from '../pages/home/hero/hero.component';
import './wxx.operator';
import { HighLightDirective } from "../pages/home/direction/highlight.direction";
import { MyPipe } from "../pages/home/pipe/my.pipe";
import { AccessModule } from "../pages/access";
import { IonicStorageModule } from '@ionic/storage';
import { TestPageComponent } from "../pages/home/test/test.page";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HeroComponent,
    HighLightDirective,
    MyPipe,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AccessModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TestPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
