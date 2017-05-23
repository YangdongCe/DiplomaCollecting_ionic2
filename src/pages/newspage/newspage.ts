import { Component,Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser'
@Component({
   selector: 'page-newspage',
  templateUrl: 'newspage.html'
})
export class NewsPage {
item: any;
content: any;
html;
  constructor(public navCtrl: NavController, public navp: NavParams, public sanitizer: DomSanitizer ) {
    this.item=navp.get("item");
    this.content = sanitizer.bypassSecurityTrustHtml(this.item.content);
    this.html = this.assembleHTMLItem();
  }
  assembleHTMLItem() {
  this.content = this.sanitizer.bypassSecurityTrustHtml(this.item.content);
  return this.content;
}

}
