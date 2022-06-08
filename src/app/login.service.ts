import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './_models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
baseurl:string = "https://localhost:7076/api/Login"

login(u:User)
{
    const params = new HttpParams()
      .set('username', u.username)
      .set('password', u.password)
      .set('role', u.role);
    return this.http.post<string>(this.baseurl,{params})
  }

  getToken()
  {
    return localStorage.getItem("Authorization")
  }
  constructor(public http:HttpClient) { }
}
