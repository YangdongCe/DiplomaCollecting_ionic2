import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchsPage } from '../searchs/search'
@Component({
    selector: 'page-mydiploma',
  templateUrl: 'mydiploma.html'
})
export class MyDiploma {
zhengshu: string = "weikao";
qingchu: string = "md-close-circle";
wancheng: string = "ios-ribbon";
  constructor(public navCtrl: NavController) {

  }
  view(data){
    console.log(data);
  }
  doAdd_yikao(){
    this.navCtrl.push(SearchsPage);
  }
}
