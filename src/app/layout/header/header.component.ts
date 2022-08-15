import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice : AuthService) { }
  get islogedin(){
    let token = localStorage.getItem('token')
    if(token){
      return true
    }
      return false
  }
  
  logout(){
    this.authservice.logout().subscribe({
      next:()=>{
        localStorage.removeItem('token')
      }
    })
  }
  ngOnInit(): void {
  }

}
