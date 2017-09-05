import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ButtonMenuComponent } from "../case/components/bmenu/button.menu";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  enter(){
    this.navCtrl.push(ButtonMenuComponent)
  }
}
