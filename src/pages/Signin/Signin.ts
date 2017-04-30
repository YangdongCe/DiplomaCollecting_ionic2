import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage2 } from '../Signin/Signin2'
@Component({
  templateUrl: 'Signin.html'
})
export class SigninPage {
  myname: string;
  mypass1: string;
  mypass2: string;
  myemail: string;
  myphone: string;
  datas;
  constructor(public navCtrl: NavController) {
      
  }
  Nextsign(){
    this.datas=[
      this.myname, this.mypass1, this.myemail, this.myphone
     ];
    this.navCtrl.push(SigninPage2, {
      datas:this.datas
    });
  }

}
