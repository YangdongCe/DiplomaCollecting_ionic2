import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{HomePage} from'../home/home';
@Component({
  templateUrl: 'forget2.html'
})
export class ForgetPage2 {

  constructor(public navCtrl: NavController) {

  }
  Next(){
    this.navCtrl.push(HomePage)
  }
}