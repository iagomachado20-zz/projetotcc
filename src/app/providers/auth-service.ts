import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(
    private fireauth: AngularFireAuth
  ){}

  login(user:any) {

    this.fireauth.auth.signInWithEmailAndPassword(user.email, user.senha)
    .then(response =>{
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });

  }

  logout() {
    this.fireauth.auth.signOut();
  }
  
  

}
