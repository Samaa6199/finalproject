import { Component, OnInit } from '@angular/core';
import {News} from 'src/app/interface/newsinterface'
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news : News[] = []
  constructor(private newsservice :NewsService) { }
  getnews(){
    this.newsservice.getnews().subscribe({
      next : (res : any)=>{
        this.news = res
      },
      error:(err : any)=>{
        console.log(err)
      }
    })
  }
  deletenews(id:any , i:number){
    this.newsservice.deleteNews(id).subscribe({
      next : ()=>{
        this.news.splice(i , 1)
      }
    })
  }
  ngOnInit(): void {
    this.getnews()
  }

}
