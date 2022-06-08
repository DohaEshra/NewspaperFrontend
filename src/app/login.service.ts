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
    return this.http.post<string>(this.baseurl,{params:{username: u.username, password: u.password, role: u.role}})
  }

  getToken()
  {
    return localStorage.getItem("Authorization")
  }
  constructor(public http:HttpClient) { }
}
