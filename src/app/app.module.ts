import { PostsModule } from './posts/posts.mdule';
import { ErrorComponent } from './error/error.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorIntercptor } from './error-interceptor';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    PostsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorIntercptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
