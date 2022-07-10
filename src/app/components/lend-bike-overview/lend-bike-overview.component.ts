import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BikeMarker } from 'src/app/models/bikeMarker';
import { MarkerService } from 'src/app/shared/marker.service';

@Component({
  selector: 'app-lend-bike-overview',
  templateUrl: './lend-bike-overview.component.html',
  styleUrls: ['./lend-bike-overview.component.css']
})
export class LendBikeOverviewComponent implements OnInit {

  constructor(private ms: MarkerService, private router: Router, private db: AngularFireDatabase, private fs: AngularFirestore) { }

  ngOnInit(): void {
  }

  getLendUser() {
    if (localStorage.getItem('lendUser') !== null && typeof localStorage.getItem('lendUser') !== 'undefined') {
      var nameString = localStorage.getItem('lendUser');
      this.db.database.ref(nameString || '').get().then(function (snapshot) {
        const data = snapshot.val();
        const nameDBString = data.name;
        const label = document.getElementById('lendUserName');
        if (label !== null) {
          label.innerHTML = 'Möchten Sie das Fahrrad von ' + nameDBString + ' ausleihen?';
        }
      });
    }
  }

  lendBike() {
    this.ms.deleteLendMarker();
  }

  navigateBack() {
    localStorage.setItem('lendUser', '');
    localStorage.setItem('lendID', '');
    this.router.navigate(['/rent']);
  }

}
