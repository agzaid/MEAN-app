import { Subscription } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoading = false;
  private authSatusSub: Subscription;

  constructor(public authService: AuthService) { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }

  ngOnInit(): void {
    this.authSatusSub = this.authService.getAuthStatusListener().subscribe(
      authSatus => {
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy() {
    this.authSatusSub.unsubscribe();

  }

}
