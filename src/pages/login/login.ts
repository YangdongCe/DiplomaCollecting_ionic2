/**
 * Created by ASUS on 2017/3/8.
 */
import { Component } from '@angular/core';


@Component({
  templateUrl: 'login.html'
})

export class LoginPage{
  constructor(){}
  loginshow : string;
  doLogin(){
      this.loginshow = 'true';
  }
  doRegister(){

  }
}
