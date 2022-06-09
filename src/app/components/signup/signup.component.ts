import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/file-upload.model';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() fileUpload!: FileUpload;
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  uploadedImg?: any;

  name: string;
  portrait: string;
  email: string;
  password: string;
  uploadUrl: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    this.auth.register(this.name, this.portrait, this.email, this.password, this.uploadUrl);
    if (this.router.url !== '/signup') {
      this.name = '';
      this.email = '';
      this.password = '';
      this.portrait = '';
    }

  }

  changeName(event: any) {
    const name = document.getElementById('name');
    const nameInput = document.getElementById('name_input');
    if (name !== null && nameInput !== null) {
      name.style.color = '#000000';
      nameInput.style.border = '1px solid #000000';
    }
  }

  changePortrait(event: any) {
    const portrait = document.getElementById('portrait');
    const portraitInput = document.getElementById('portrait_input');
    if (portrait !== null && portraitInput !== null) {
      portrait.style.color = '#000000';
      portraitInput.style.border = '1px solid #000000';
    }
  }

  changeEmail(even: any) {
    const email = document.getElementById('email');
    const emailInput = document.getElementById('email_input');
    if (email !== null && emailInput !== null) {
      email.style.color = '#000000';
      emailInput.style.border = '1px solid #000000';
    }
  }

  changePassword(event: any) {
    const password = document.getElementById('password');
    const passwordInput = document.getElementById('password_input');
    if (password !== null && passwordInput !== null) {
      password.style.color = '#000000';
      passwordInput.style.border = '1px solid #000000';
    }
  }

}
