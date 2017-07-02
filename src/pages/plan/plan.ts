import { Component ,OnInit} from '@angular/core';
import { NavController , ViewController, ModalController} from 'ionic-angular';
import { TabsPage  } from '../tabs/tabs'
@Component({
    selector: 'page-plan',
  templateUrl: 'plan.html'
})
export class Plan implements OnInit {
  private year:number
  private month:number
  private dateObject
  public navCtrl: NavController
 
  private examday:number = 27
  public content:string="复习六级词汇"
  //返回上个月份数据
 
  goPrev(){
    this.month--
    if(this.month==0){
      this.month=12
      this.year--
    }
    this.dateObject=this.getDatesOfMonth(this.year,this.month)

  }
  goNext(){
    this.month++
      if(this.month==13){
      this.month=1
      this.year++
    }
    this.dateObject=this.getDatesOfMonth(this.year,this.month)
  }
  //返回指定年月的日历日期数组
  getDatesOfMonth(year:number,month:number){
    let datesArray:Array<string>=[];
    let date=new Date(year,month-1);
    let nowDay=new Date().getDate();
    let day=date.getDay();
    let days:Array<string>=['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
    let months:Array<string>=['January','February','March','April','May','June','July','August','September','October','November','December'];
    let lastDayOfLastMonth=new Date(year,month-1,0).getDate()
    //加入上个月的日期
    for(let i=lastDayOfLastMonth;i>lastDayOfLastMonth-day;i--){
      datesArray.unshift(' ')
    }
      //加入当月日期
      let lastDayOfNowMonth=new Date(year,month,0).getDate()
      for (let index = 1; index <=lastDayOfNowMonth; index++) {
        datesArray.push(days[index])
        
      }
      //加入下个月日期
      let countOfNextMonth=42-lastDayOfNowMonth-day
      for (let index = 1; index <=countOfNextMonth; index++) {
        
          datesArray.push(' ')
      }
      console.log(datesArray)
    return {
      year:year,
      nowDay:nowDay,
      month:months[month],
      datesArray:datesArray
    }
  }
  constructor( public viewCtrl: ViewController) {
 let date=new　Date()  
 this.year=date.getFullYear();
 this.month=date.getMonth()+1;

   }
   Dismiss() {
    this.viewCtrl.dismiss(); 
  }
  ngOnInit() {
    
   this.dateObject=this.getDatesOfMonth(this.year,this.month)
  }
   getday(item)
   {
     if(item==3)
     {
       this.content="做六级听力";
     }
     else if(item==this.examday)
     {
        this.content="六级考试";
     }
   }

}
