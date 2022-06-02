import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReporterService {

  url = "http://localhost:3000/"
  
  constructor(private http:HttpClient) { }
  getprofile(){
    return this.http.get(this.url + 'profile')
  }
}
