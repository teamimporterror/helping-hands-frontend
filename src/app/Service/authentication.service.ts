import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private _registerUrl = "https://nxv10258.pythonanywhere.com/beneficiary"
  private _register2Url = "https://nxv10258.pythonanywhere.com/donor"
  private _loginUrl = "https://nxv10258.pythonanywhere.com/login"
  constructor(private http: HttpClient, private router: Router) { }

  register(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  registerdonor(user) {
    return this.http.post<any>(this._register2Url, user)
  }

  loginAdmin(user) {
    return this.http.post<any>("https://nxv10258.pythonanywhere.com/admin/login", user)
  }

  login(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedin() {
    return !!sessionStorage.getItem('token')
  }

  getToken() {
    return sessionStorage.getItem('token')
  }

  logout() {
    sessionStorage.removeItem('token')
    this.router.navigate(['/'])
  }
  currentUser() {
    let token = sessionStorage.getItem('token')
    let jwthelper = new JwtHelperService();
    return jwthelper.decodeToken(token)
  }

}
