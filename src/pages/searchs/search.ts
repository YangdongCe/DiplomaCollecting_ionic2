import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetDipservices } from'../../services/getallDipservices'
@Component({
    selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchsPage {
  items;
  datas;
  myInput;
  constructor(public navCtrl: NavController, private getallDip: GetDipservices ) {
      this.myInput='';
      this.getPost();
      
  }
  ngOnInit(){
      this.initializeItems();
      
  }
  getPost(){
    this.getallDip.getPost().subscribe(res => {
            this.items=res;
            this.datas=res;
      });
  }
  view(item){
    console.log(item);
  }
  initializeItems() {
    this.items=this.datas;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
