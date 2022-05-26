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
      const email_id = email.toLowerCase().replace(/\./g, 'EMAIL_IDENTIFIER');
      localStorage.setItem('email', email_id);
      this.router.navigate(['/home']);
    }, err => {
      const email = document.getElementById('email');
      const email_input = document.getElementById('email_input');
      const password = document.getElementById('password');
      const password_input = document.getElementById('password_input');
      if (email !== null && email_input !== null && password !== null && password_input !== null) {
        email.style.color = 'red';
        email_input.style.borderColor = 'red';
        password.style.color = 'red';
        password_input.style.borderColor = 'red';
      }
      const warning = document.getElementById('errorText');
      if (warning !== null) {
        warning.style.display = 'block';
      }
    })
  }

  register(name: string, portrait: string, email: string, password: string) {

    this.userdata = <JSON><unknown>{
      name: name,
      portrait: portrait,
      email: email
    }
    let email_id = email;
    if (typeof email !== 'undefined') {
      email_id = email.replace(/\./g, 'EMAIL_IDENTIFIER');
    }
    if (typeof name === 'undefined' || name === '') {
      const errorText = document.getElementById('name');
      const error = document.getElementById('name_input');
      if (error !== null && errorText !== null) {
        console.log(name);
        errorText.style.color = 'red';
        error.style.border = '1px solid red';
        const warning = document.getElementById('errorText');
        if (warning !== null) {
          warning.style.display = 'block';
        }
      }
      return;
    }
    if (typeof portrait === 'undefined' || portrait === '') {
      const errorText = document.getElementById('portrait');
      const error = document.getElementById('portrait_input');
      if (error !== null && errorText !== null) {
        errorText.style.color = 'red';
        error.style.border = '1px solid red';
        const warning = document.getElementById('errorText');
        if (warning !== null) {
          warning.style.display = 'block';
        }
      }
      return;
    }
    if (typeof email === 'undefined' || email === '') {
      const errorText = document.getElementById('email');
      const error = document.getElementById('email_input');
      if (error !== null && errorText !== null) {
        errorText.style.color = 'red';
        error.style.border = '1px solid red';
        const warning = document.getElementById('errorText');
        if (warning !== null) {
          warning.style.display = 'block';
        }
      }
      return;
    }
    if (typeof password === 'undefined' || password === '') {
      const errorText = document.getElementById('password');
      const error = document.getElementById('password_input');
      if (error !== null && errorText !== null) {
        errorText.style.color = 'red';
        error.style.border = '1px solid red';
        const warning = document.getElementById('errorText');
        if (warning !== null) {
          warning.style.display = 'block';
        }
      }
      return;
    }

    return this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      this.db.object(email_id).set(this.userdata);
      this.router.navigate(['/']);
    }, err => {
      if (err.code == 'auth/email-already-in-use') {
        console.log('Email already in use');
        const labelText = document.getElementById('email');
        const label = document.getElementById('email_input');
        if (label !== null && labelText !== null) {
          labelText.style.color = 'red';
          label.style.border = '1px solid red';
          const warning = document.getElementById('errorText');
          if (warning !== null) {
            warning.innerHTML = 'Es existiert bereits ein Account mit dieser E-Mail';
            warning.style.display = 'block';
          }
        }
      }
      if (err.code == 'auth/invalid-email') {
        console.log('Invalid email');
        const labelText = document.getElementById('email');
        const label = document.getElementById('email_input');
        if (label !== null && labelText !== null) {
          labelText.style.color = 'red';
          label.style.border = '1px solid red';
          const warning = document.getElementById('errorText');
          if (warning !== null) {
            warning.innerHTML = 'Ungültige Email';
            warning.style.display = 'block';
          }
        }
      }
      if (err.code == 'auth/weak-password') {
        console.log('Weak password');
        const labelText = document.getElementById('password');
        const label = document.getElementById('password_input');
        if (label !== null && labelText !== null) {
          labelText.style.color = 'red';
          label.style.border = '1px solid red';
          const warning = document.getElementById('errorText');
          if (warning !== null) {
            warning.innerHTML = 'Das Passwort muss mindestens 6 Zeichen lang sein';
            warning.style.display = 'block';
          }
        }
      }
    });
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
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
