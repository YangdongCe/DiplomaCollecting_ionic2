import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetDipdetailservices{
  http:any;
  baseUrl: String;
  constructor(http:Http){
    this.http = http;
    this.baseUrl = 'http://123.206.49.116:8001/credentialselect/?name=';
  }

  getPost(name){
    return this.http.get(this.baseUrl+name)
    .map(res => res.json());
  }
}
