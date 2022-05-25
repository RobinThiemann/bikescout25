import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bikescout25';
  clickcount = 0;

  constructor(private auth: AuthService, private router: Router, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.clickcount = 0;
    this.auth.autologin();
  }

  showNavbar() {
    return localStorage.getItem('token') == 'true';
  }

  logout() {
    this.auth.logout();
  }

  navigateHome() {
    if (localStorage.getItem('token') == 'true') {
      this.router.navigate(['/home']);
    }
    this.clickcount++;
    if (this.clickcount == 25) {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  }

  changeName() {
    if (localStorage.getItem('email') !== null) {
      const email = localStorage.getItem('email');
      if (email !== null) {
        this.db.database.ref(email || '').get().then(function (snapshot) {
          const data = snapshot.val();
          const nameString = 'Willkommen ' + data.name;
          const label = document.getElementById('changeName');
          if (label !== null) {
            label.innerHTML = nameString;
          }
        });
      }
    }

  }

}
