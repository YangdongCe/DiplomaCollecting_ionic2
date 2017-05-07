import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { SelectedMePage }from '../Selected/SelectedMe';
import { Mechange }  from'../me/me_change';
@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

myname:string;
  constructor(public navCtrl: NavController) {
  }

  Selectedme(){
     this.navCtrl.push(SelectedMePage)
  }
  Selectedwho(){

  }
  Selectedstyle(){

}
Selectedreply(){

}
Selectedlike(){

}
Selectedchange(){
  this.navCtrl.push(Mechange)

}
}
