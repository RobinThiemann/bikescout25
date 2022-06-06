import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import {Loader} from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  center: google.maps.LatLngLiteral

  constructor(private router: Router, private db: AngularFireDatabase) { }

  ngOnInit(): void {

    //loading the map

    let loader = new Loader({
      apiKey:'AIzaSyD3-2RCJ5_8u-WTe4I38O-AzrukA3YfIHo'
    });

    loader.load().then(() => {
      console.log("loaded map")

      //location of marker
      const location = {
        lat:33.8688,
        lng:151.2093,
      };

      this.map = new google.maps.Map(document.getElementById("map"),
        {
          center: location,
          zoom: 6
        })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,

      });

    })

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

  title = "google-maps"

  private map: google.maps.Map


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

  click(event: google.maps.MapMouseEvent) {
    console.log(event)
  }

}

