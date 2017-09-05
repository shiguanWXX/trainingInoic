import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';
import { LoginComponent } from "../access/components/login.component";
import { Storage } from '@ionic/storage';
import { TestPageComponent } from "./test/test.page";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HeroService]
})
export class HomePage {
  selectHero: Hero;
  heros: Hero[];
  title = 'aa';
  now = new Date();
  constructor(public navCtrl: NavController, private service: HeroService,
    private storage: Storage,
    public events: Events) {
    this.heros = [];
    this.selectHero = { id: 0, name: 'none' }//none
  }
  showTitle() {
    alert(this.title);
  }
  select(u: Hero) {
    this.selectHero = u;
  }

  load() {
    this.service.getHerosFromServe()
      .then((result) => this.heros = result)
      .catch(e => { console.error(e) });
  }
  load2(){
    this.service.getHerosTest()
    .then(heroM=>console.log(heroM))
    
  }
  login() {
    let heroN = { id: 1, name: 'aa' };
    this.events.publish('heroN:created', heroN, Date.now())
    console.log("Hero Created")
    this.navCtrl.push(LoginComponent);
  }
  saves() {
    this.storage.set('test', 'aa');
  }
  gets() {
    this.storage.get('test').then(m => { console.log(m) });
  }
test(){
  this.navCtrl.push(TestPageComponent)
}
}
