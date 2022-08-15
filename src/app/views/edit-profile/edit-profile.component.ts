import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reporters } from 'src/app/interface/reporterinterface';
import { ReporterService } from 'src/app/services/reporter.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private reporterservice:ReporterService , private router:Router) { }
  reporter : Reporters ={}
  file : any
  getprofile(){
    this.reporterservice.getprofile().subscribe({
      next:(res:any)=>{
        this.reporter = res
      }
    })
  }

  updateprofile(data : any){
    this.reporterservice.updateprofile(data).subscribe({
      next:()=>{
        this.uploadfile()
        this.router.navigateByUrl('/profile')
      }
    })}

    handleupload(event:any){
      console.log(event)
      this.file = event.target.files
    }

    uploadfile(){
      if(this.file){
      const Rimage = new FormData()
      Rimage.append('avatar' , this.file[0])
      this.reporterservice.reporterimage(Rimage).subscribe(()=>{})
    }
  }

    ngOnInit(): void {
      this.getprofile()
    }

}
