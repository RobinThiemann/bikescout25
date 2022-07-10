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
    localStorage.setItem('lat', '');
    localStorage.setItem('lng', '');
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
    if (localStorage.getItem('token') === 'true' && localStorage.getItem('lat') !== '' && localStorage.getItem('lng') !== '') {
      this.router.navigate(['/rent'], { relativeTo: this.route });
    } else {
      const errortext = document.getElementById('errorText_home');
      if (errortext !== null && localStorage.getItem('token') !== 'true') {
        errortext.innerHTML = 'Bitte logge dich ein, um diese Funktion zu nutzen.';
      } else if (errortext !== null && (localStorage.getItem('lat') === '' || localStorage.getItem('lng') === '')) {
        errortext.innerHTML = 'Wählen Sie einen Punkt auf der Karte aus.';
      }
    }
  }

  navigateLend() {
    if (localStorage.getItem('token') === 'true' && localStorage.getItem('lat') !== '' && localStorage.getItem('lng') !== '') {
      this.router.navigate(['/lend'], { relativeTo: this.route });
    } else {
      const errortext = document.getElementById('errorText_home');
      if (errortext !== null && localStorage.getItem('token') !== 'true') {
        errortext.innerHTML = 'Bitte logge dich ein, um diese Funktion zu nutzen.';
      } else if (errortext !== null && (localStorage.getItem('lat') === '' || localStorage.getItem('lng') === '')) {
        errortext.innerHTML = 'Wählen Sie einen Punkt auf der Karte aus.';
      }
    }
  }
}

