import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = "http://localhost:3000/"

  constructor(private http:HttpClient) { }
  addnews(data : any){
    return this.http.post(this.url + 'news' , data)
  }

  getnews(){
    return this.http.get(this.url + 'allnews')
  }

  getSingle(id : any){
    return this.http.get(this.url + 'news/' + id)
  }

  updateNews(id : any , data : any){
    return this.http.patch(this.url + 'news/' + id , data)
  }

  deleteNews(id : any){
    return this.http.delete(this.url + 'news/' + id)
  }
}
