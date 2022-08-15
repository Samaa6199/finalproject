import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = "http://localhost:3000/"
  constructor(private http:HttpClient) { }

  signup(data : any){
    return this.http.post(this.url + 'reporter/signup' , data)
  }

  login(data : any){
    return this.http.post(this.url + 'reporter/login' , data)
  }

  logout(){
    return this.http.delete(this.url + 'logout')
  }
}
