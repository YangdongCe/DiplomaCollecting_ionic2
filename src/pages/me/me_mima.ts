import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ForgetPage } from'../Forget/Forget';
@Component({
    selector: 'page-me_mima',
  templateUrl: 'me_mima.html'
})

export class Memima{
  constructor(public navCtrl: NavController){}
  donext(){
      this.navCtrl.push(ForgetPage)
  }
  doprotect(){

  }
}
