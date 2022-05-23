import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userdata: {
    name: string,
    portrait: string,
    email: string,
    password: string
  }

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    return this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      localStorage.setItem('email', email);
      this.router.navigate(['/home']);
    }, err => {
      alert('Invalid email or password');
      this.router.navigate(['/home']);
    })
  }

  register(name: string, portrait: string, email: string, password: string) {
    this.userdata.name = name;
    this.userdata.portrait = portrait;
    this.userdata.email = email;
    this.userdata.password = password;
    return this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/']);
    }, err => {
      if (err.code == 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
        alert(err.message);
      }
    })
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    }, err => {
      alert(err.message);
    })
  }

  autologin() {
    if (localStorage.getItem('token') == 'true') {
      this.router.navigate(['home/']);
    }
  }

}
