import { Subscription } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  isLoading = false;
  private authSatusSub: Subscription;

  constructor(public authService: AuthService) { }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // this.isLoading = true;
    this.authService.createUser(form.value.email, form.value.password);
    form.reset();
  }

  ngOnInit(): void {
    this.authSatusSub = this.authService.getAuthStatusListener().subscribe(
      authSatus=>{
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy(){
    this.authSatusSub.unsubscribe();
  }

}
