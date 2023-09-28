import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { UserModel } from 'src/app/Model/user';
import { AlertifyService, MessageType, Position } from '../alertify/alertify.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (
    private _httpClient: HttpClient,
    private router: Router,
    private alertify: AlertifyService
  ) { }
  private url = 'https://dummyjson.com/auth/login';

  get isAuthenticated(): boolean {
    return localStorage.getItem('usertoken') ? true : false;
  }
  set accessToken(token: string) {
    localStorage.setItem('usertoken', token);
  }
  get accessToken(): string {
    return localStorage.getItem('usertoken') ?? '';
  }

  signIn(credentials: UserModel): Observable<any> {

    //Post request for API and save user data in local storage  
    return this._httpClient.post(this.url, credentials).pipe(
      switchMap((response: any) => {
        if (response) {
          const data = response;
          localStorage.setItem('usertoken', data.token);
          localStorage.setItem('user', JSON.stringify(data));
          this.accessToken = data.token;
          return of(response);
        } else {
          return of(response);
        }
      })
    );

  }
  CheckisAuthenticated() {
    // check local storage fill or full
    if (this.isAuthenticated && this.accessToken != '') {
      debugger;
      this.alertify.message("Already logged in", { messageType: MessageType.Success, position: Position.TopCenter, delay: 2 })
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['']);
    }
  }
}
