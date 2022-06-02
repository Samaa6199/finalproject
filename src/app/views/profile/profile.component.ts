import { Component, OnInit } from '@angular/core';
import { Reporters } from 'src/app/interface/reporterinterface';
import { ReporterService } from 'src/app/services/reporter.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  reporter : Reporters = {}
  constructor(private reporterservice : ReporterService) { }
  getprofile(){
    this.reporterservice.getprofile().subscribe({
      next : (res : any)=>{
        console.log(res)
        this.reporter = res
      },
      error: (err:any)=>{
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.getprofile()
  }

}
