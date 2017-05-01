/**
 * Created by ASUS on 2017/3/8.
 */
import { Component } from '@angular/core';
import { SigninPage } from '../Signin/Signin';
import { NavController } from 'ionic-angular';
import {ForgetPage } from '../Forget/Forget';
@Component({
  templateUrl: 'login.html'
})

export class LoginPage{
  constructor(public navCtrl: NavController){}
  loginshow : string;
  doLogin(){
      this.loginshow = 'true';
  }
  doRegister(){

  }
  doSign(){
      this.navCtrl.push(SigninPage)
  }
  doForget(){
      this.navCtrl.push(ForgetPage)
  }
}
