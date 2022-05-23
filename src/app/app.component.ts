import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bikescout25';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
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
  }
}
