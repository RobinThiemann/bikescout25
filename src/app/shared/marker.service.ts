import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { BikeMarker } from '../models/bikeMarker';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  markerCollection: AngularFirestoreCollection<BikeMarker>;
  bikeMarkers: Observable<any[]>;
  rentMarkers: Observable<any[]>;
  lendMarkers: Observable<any[]>;


  itemDoc: AngularFirestoreDocument<BikeMarker>;

  constructor(public afs: AngularFirestore, private router: Router) {
    /*this.bikeMarkers = this.afs.collection('Marker').valueChanges();*/

    this.markerCollection = this.afs.collection('Marker');

    this.bikeMarkers = this.afs.collection('Marker').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as BikeMarker
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getMarkers() {
    return this.bikeMarkers;
  }

  addMarker(marker: BikeMarker) {
    this.markerCollection.add(marker);
    this.router.navigate(['/']);
  }

  deleteMarker(markerID: string) {
    console.log(markerID);
    this.itemDoc = this.afs.doc(`Marker/${markerID}`);
    this.itemDoc.delete();
  }

  addRent(marker: BikeMarker) {
    if (localStorage.getItem('email') !== null) {
      var collectionString = localStorage.getItem('email') + 'Rent';
      this.afs.collection(collectionString).add(marker);
    }
  }

  addLend(marker: BikeMarker) {
    if (localStorage.getItem('email') !== null) {
      var collectionString = localStorage.getItem('email') + 'Lend';
      this.afs.collection(collectionString).add(marker);
    }
  }

  getRentMarkers() {
    if (localStorage.getItem('email') !== null) {
      var collectionString = localStorage.getItem('email') + 'Rent';
      this.rentMarkers = this.afs.collection(collectionString).snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as BikeMarker
          data.id = a.payload.doc.id;
          return data;
        });
      }));
    }
    return this.rentMarkers;
  }

  getLendMarkers() {
    if (localStorage.getItem('email') !== null) {
      var collectionString = localStorage.getItem('email') + 'Lend';
      this.lendMarkers = this.afs.collection(collectionString).snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as BikeMarker
          data.id = a.payload.doc.id;
          return data;
        });
      }));
    }
    return this.lendMarkers;
  }

  deleteLendMarker() {
    var idString: string;
    var data: BikeMarker;
    if (localStorage.getItem('lendID') !== null && typeof localStorage.getItem('lendID') !== 'undefined') {
      idString = localStorage.getItem('lendID')!;
      this.afs.collection('Marker').doc(idString).ref.get().then((snapshot) => {
        console.log(snapshot.data());
        data = snapshot.data() as BikeMarker;
        if (typeof data.Email !== 'undefined') {
          console.log('hier');
          this.deleteMarker(idString);
          this.addRent(data);
          this.router.navigate(['/']);
        }
      });
    }
  }
}
