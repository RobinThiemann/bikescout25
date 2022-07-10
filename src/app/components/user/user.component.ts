import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarkerService } from 'src/app/shared/marker.service';
import { BikeMarker } from 'src/app/models/bikeMarker';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  key: string;
  name: string;
  url: string;
  file: File;

  rentMarkerCollection: AngularFirestoreCollection<BikeMarker>;
  lendMarkerCollection: AngularFirestoreCollection<BikeMarker>;

  rentMarkers: BikeMarker[];
  lendMarkers: BikeMarker[];

  constructor(public afs: AngularFirestore, private ms: MarkerService, private router: Router, private db: AngularFireDatabase) {

    this.rentMarkerCollection = this.afs.collection(localStorage.getItem('email')! + 'Rent');
    this.lendMarkerCollection = this.afs.collection(localStorage.getItem('email')! + 'Lend');
  }

  ngOnInit(): void {
    this.ms.getLendMarkers().subscribe(markers => {
      this.lendMarkers = markers;
    });
    this.ms.getRentMarkers().subscribe(markers => {
      this.rentMarkers = markers;
    });
  }

  showItemsLend() {
    if (this.lendMarkers.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  showItemsRent() {
    if (this.rentMarkers.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  getName() {
    if (localStorage.getItem('email') !== null) {
      const email = localStorage.getItem('email');
      if (email !== null) {
        this.db.database.ref(email || '').get().then(function (snapshot) {
          const data = snapshot.val();
          const nameString = 'Name:  ' + data.name;
          const label = document.getElementById('userName');
          if (label !== null) {
            label.innerHTML = nameString;
          }
        });
      }
    }
  }

  getPortrait() {
    if (localStorage.getItem('email') !== null) {
      const email = localStorage.getItem('email');
      if (email !== null) {
        this.db.database.ref(email || '').get().then(function (snapshot) {
          const data = snapshot.val();
          const portraitString = data.portrait;
          const label = document.getElementById('userPortrait');
          if (label !== null) {
            label.innerHTML = portraitString;
          }
        });
      }
    }
  }

}
