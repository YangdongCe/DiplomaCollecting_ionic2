import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class Newlistservices{
  http:any;
  baseUrl: String;
  constructor(http:Http){
    this.http = http;
    this.baseUrl = 'http://api.dagoogle.cn/news/get-news?tableNum=8&pagesize=3';
  }

  getPost(){
    return this.http.get(this.baseUrl)
    .map(res => res.json());
  }
}
