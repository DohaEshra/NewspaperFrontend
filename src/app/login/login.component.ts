import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
u:User=new User("", "", "");
Login()
{
  this.LogSer.login(this.u).subscribe(a=>
    {
      localStorage.setItem("Authorization", a)
      this.router.navigateByUrl("/"+this.u.role);

    },
    err=>console.log(err))
}
  constructor(public LogSer:LoginService, public router:Router) { }

  ngOnInit(): void {
  }

}
