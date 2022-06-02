import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService : AuthService , private router:Router) { }
  invalidEmail:boolean = false
  invalidpassword : boolean = false
  msgPassword : string = ''
  invalidphone : boolean = false
  msgPhone : string = ''
  onSubmit(data:any){
    this.authService.signup(data).subscribe({
      next:(res : any)=>{
        localStorage.setItem('token' , res.token)
        this.router.navigateByUrl('/profile')
      },
      error:(httpError:any)=>{
        console.log(httpError)
        // Email Error
        if(httpError.error.code === 11000){
          this.invalidEmail = true
        }
        // Password Error
        else if(httpError.error.errors.password){
          this.invalidpassword = true 
          this.msgPassword = httpError.error.errors.password.message
        }
        // Phone Number Error
        else if(httpError.error.errors.phoneNumber){
          this.invalidphone = true
          this.msgPhone = httpError.error.errors.phoneNumber.message
        }
      }
    })
  }
  ngOnInit(): void {
  }

}
