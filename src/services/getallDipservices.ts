import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetDipservices{
  http:any;
  baseUrl: String;
  constructor(http:Http){
    this.http = http;
    this.baseUrl = 'http://123.206.49.116:8001/cre/';
  }

  getPost(){
    return this.http.get(this.baseUrl)
    .map(res => res.json());
  }
}
