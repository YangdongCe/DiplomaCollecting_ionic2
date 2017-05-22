import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
   selector: 'page-newspage',
  templateUrl: 'newspage.html'
})
export class NewsPage {
item: any;
  constructor(public navCtrl: NavController, public navp: NavParams) {
    this.item=navp.get("item");
  }

}
