import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  center: google.maps.LatLngLiteral

  constructor(private router: Router, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== 'true') {
      this.router.navigate(['/']);
    }
    this.changeName();
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
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

  dblclick(event: google.maps.MouseEvent) {
    console.log(event)
  }

}

