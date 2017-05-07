import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{TabsPage} from'../tabs/tabs';
@Component({
  templateUrl: 'forget2.html'
})
export class ForgetPage2 {

  constructor(public navCtrl: NavController) {

  }
  Next(){
    this.navCtrl.push(TabsPage)
  }
}