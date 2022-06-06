import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string;
  portrait: string;
  email: string;
  password: string;

  constructor(private auth: AuthService, db: AngularFireDatabase) { }

  ngOnInit(): void {
  }

  signup() {
    if (this.name == '' || this.portrait == '' || this.email == '' || this.password == '') {
      alert('Please fill all fields');
      return;
    }
    this.auth.register(this.name, this.portrait, this.email, this.password);
    this.name = '';
    this.email = '';
    this.password = '';

  }

}
