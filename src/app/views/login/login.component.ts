import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService :AuthService , private router : Router) { }
  invalidlogin : boolean = false
  login(data:any){
    this.authService.login(data).subscribe({
      next:(res:any)=>{
        localStorage.setItem('token',res.token)
        this.router.navigateByUrl('/profile')

      },
      error:()=>{
        this.invalidlogin = true
      }
    })
  }
  ngOnInit(): void {
  }

}
