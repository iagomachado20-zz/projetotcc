import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth-service';

export class User {
  email:string;
  senha:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = {
    email: '',
    senha: ''
  };
  
  constructor(
    private auth: AuthService
  ) 
  { }

  ngOnInit() {
  }

  postUser(user) {
    this.auth.login(user);
  }

  logout() {
    this.auth.logout();
  }

}
