import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userdata: JSON;

  constructor(private fireauth: AngularFireAuth, private router: Router, private db: AngularFireDatabase) { }

  login(email: string, password: string) {
    return this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      const email_id = email.replace(/\./g, 'EMAIL_IDENTIFIER');
      localStorage.setItem('email', email_id);
      this.router.navigate(['/home']);
    }, err => {
      alert('Invalid email or password');
      this.router.navigate(['/home']);
    })
  }

  register(name: string, portrait: string, email: string, password: string) {

    this.userdata = <JSON><unknown>{
      name: name,
      portrait: portrait,
      email: email,
      password: password
    }

    const email_id = email.replace(/\./g, 'EMAIL_IDENTIFIER');
    console.log(email_id);
    this.db.object(email_id).set(this.userdata);
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
