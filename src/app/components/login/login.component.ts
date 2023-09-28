import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/Model/user';
import { AlertifyService, MessageType, Position } from 'src/app/services/alertify/alertify.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Loginform: FormGroup;

  public myError = (controlName: string, errorName: string) => {
    return this.Loginform.controls[controlName].hasError(errorName);
  };
  constructor (
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {
    this.authService.CheckisAuthenticated();
    this.Loginform = this.fb.group({
      username: ["", [
        Validators.required
      ]],
      password: ["", [
        Validators.required
      ]],
      key: ["web"]
    });
  }


  loginSubmit(user: UserModel) {
    // form check
    if (this.Loginform.valid) {
      this.authService.signIn(user).subscribe(response => {
        this.alertify.message("Success Login ", { messageType: MessageType.Success, position: Position.TopCenter, delay: 2 });
        this.router.navigate(['/home']);
      });
    }
    else {
      this.alertify.message("Please fill the required", { messageType: MessageType.Error, position: Position.TopCenter, delay: 2 });
    }
  }

}
