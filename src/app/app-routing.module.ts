import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewsComponent } from './views/addnews/addnews.component';
import { LoginComponent } from './views/login/login.component';
import { NewsComponent } from './views/news/news.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignupComponent } from './views/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatenewsComponent } from './views/updatenews/updatenews.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';


const routes: Routes = [
  {path : '' , component:LoginComponent},
  {path : 'signup' , component:SignupComponent},
  {path :'profile' , component:ProfileComponent},
  {path : 'news' , component:NewsComponent},
  {path : 'addnews' , component:AddnewsComponent},
  {path : 'updatenews/:id' , component:UpdatenewsComponent},
  {path: 'editprofile' , component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
