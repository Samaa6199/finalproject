import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ReporterService } from './services/reporter.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ProfileComponent } from './views/profile/profile.component';
import { NewsComponent } from './views/news/news.component';
import { AddnewsComponent } from './views/addnews/addnews.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsService } from './services/news.service';
import { UpdatenewsComponent } from './views/updatenews/updatenews.component';
import { FooterComponent } from './layout/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    NewsComponent,
    AddnewsComponent,
    UpdatenewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    ReporterService,
    NewsService,
    {
      provide : HTTP_INTERCEPTORS, // token send in each request 
      useClass : TokenInterceptorService,  // use HTTP_INTERCEPTORS
      multi : true // code work with all comp & services
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
