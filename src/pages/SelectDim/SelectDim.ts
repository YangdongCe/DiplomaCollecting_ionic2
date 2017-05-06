import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
@Component({
  templateUrl: 'SelectDim.html'
})
export class SelectDimPage {
  zhengshu1:any;
  shengshu2:any;
  constructor(public navCtrl: NavController) {
    
  }
  doAdd(){
    console.log(this.zhengshu1);
    this.navCtrl.push(TabsPage);
  }
  add(){
    console.log('acd');
  }
}
 