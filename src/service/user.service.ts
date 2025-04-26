import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }


  GetUsreDetails(){

    let headers = new HttpHeaders();
    headers.set("Accept", 'application/json');
    headers.set('Content-Type', 'application/json');
    let options ={ headers: headers };
    return this.http.get('https://zil-test.s3.us-east-1.amazonaws.com/json-data.json', options)
   
  }
}
