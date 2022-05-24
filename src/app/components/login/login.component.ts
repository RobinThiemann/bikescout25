import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {

    if (this.email == '' || this.password == '') {
      alert('Please fill all fields');
      return;
    }

    this.auth.login(this.email, this.password);
    if (this.router.url !== '/login') {
      this.email = '';
      this.password = '';
    }
  }

}
