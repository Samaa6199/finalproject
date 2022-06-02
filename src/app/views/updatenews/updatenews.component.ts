import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { News } from 'src/app/interface/newsinterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-updatenews',
  templateUrl: './updatenews.component.html',
  styleUrls: ['./updatenews.component.css']
})
export class UpdatenewsComponent implements OnInit {

  constructor(private newsservice : NewsService , private route:ActivatedRoute , private router:Router) { }
  id = this.route.snapshot.params['id']
  news : News ={}
  getSingle(){
    this.newsservice.getSingle(this.id).subscribe({
      next: (res:any)=>{
        this.news = res
      }
    })
  }
  
  updatenews(data:any){
    this.newsservice.updateNews(this.id,data).subscribe({
      next:()=>{
        this.router.navigateByUrl('/news')
      }
    })
  }

  ngOnInit(): void {
    this.getSingle()
  }

}
