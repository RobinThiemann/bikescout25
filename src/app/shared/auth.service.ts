import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    return this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['']);
      alert('Login Successful');
    }, err => {
      alert('Invalid email or password');
      this.router.navigate(['']);
    })
  }

  register(email: string, password: string) {
    return this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/login']);
      alert('Registration Successful');
    }, err => {
      alert('Invalid email or password');
      this.router.navigate(['/login']);
    })
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }
}
