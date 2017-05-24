import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetDipdetailservices } from '../../services/getdipdetailservices'
@Component({
   selector: 'page-dipdetail',
  templateUrl: 'diploma_detail.html'
})
export class DipDetailPage {
name:string='';
item:any;
introduce:string=' ';
time:string='........';
time2:string="........";
time3:string='........'; 
  constructor(public navCtrl: NavController, public navparams: NavParams, private getdip: GetDipdetailservices) {
     this.name = navparams.get('name');
     
  }
  ngOnInit(){
    this.getPost();
  }
  getPost(){
    this.getdip.getPost(this.name).subscribe(reponse => {
      this.introduce=reponse.introduce;
      this.time=reponse.time;
      this.time2 = reponse.search;
      this.time3 = reponse.grade;
      console.log(reponse);
    });
  }
}
