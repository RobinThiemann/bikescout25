import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarkerService } from 'src/app/shared/marker.service';
import { BikeMarker } from 'src/app/models/bikeMarker';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

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

  constructor(public afs: AngularFirestore, private ms: MarkerService, private router: Router) {

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

}
