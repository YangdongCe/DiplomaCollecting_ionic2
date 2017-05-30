import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
@Component({
  selector: 'page-communitydetail',
  templateUrl: 'communitydetail.html'
})
export class CommunitDetailPage {
item;
  constructor(public navCtrl: NavController, public navparams: NavParams) {
     this.item=navparams.get('item');
  }

}
