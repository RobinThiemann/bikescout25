import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private db: AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== 'true') {
      this.router.navigate(['/']);
    }
    this.changeName();
  }

  changeName() {
    if (localStorage.getItem('email') !== null) {
      const email = localStorage.getItem('email');
      this.db.database.ref(email || '').get().then(function (snapshot) {
        const data = snapshot.val();
        const nameString = 'Willkommen ' + data.name;
        console.log(nameString);
        const label = document.getElementById('changeName');
        if (label !== null) {
          label.innerHTML = nameString;
        }
      });
    }
  }

  navigateRent() {
    this.router.navigate(['/rent'], { relativeTo: this.route });
  }

  navigateLend() {
    this.router.navigate(['/lend'], { relativeTo: this.route });
  }
}

