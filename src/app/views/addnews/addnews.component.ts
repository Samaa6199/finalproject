import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {

  constructor(private fb:FormBuilder , private newsservice: NewsService , private router:Router) { }
  newsForm = this.fb.group({
    title:['' , [Validators.required]],
    description: ['' ,[Validators.required]]
  })
  addnews(data : any){
    this.newsservice.addnews(data).subscribe({
      next:()=>{
        this.router.navigateByUrl('/news')
      },
      error:(err : any)=>{
        console.log(err)
      }
    })
  }
  get newValues(){
    return this.newsForm.controls
  }
  
  ngOnInit(): void {
  }

}
