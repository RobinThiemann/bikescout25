import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string;
  email: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  signup() {
    if (this.name == '' || this.email == '' || this.password == '') {
      alert('Please fill all fields');
      return;
    }
    this.auth.register(this.email, this.password);
    this.name = '';
    this.email = '';
    this.password = '';

  }

}
