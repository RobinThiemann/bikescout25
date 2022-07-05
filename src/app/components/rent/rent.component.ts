import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarkerService } from 'src/app/shared/marker.service';
import { BikeMarker } from 'src/app/models/bikeMarker';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  markers: BikeMarker[];

  showButton: boolean = false;

  constructor(private ms: MarkerService, private router: Router) { }

  ngOnInit(): void {
    this.ms.getMarkers().subscribe(marker => {
      this.markers = marker;
      this.markers.sort((m1, m2) => this.getDistance(m1) - this.getDistance(m2));
    });
  }

  getDistance(bm: BikeMarker) {
    if (localStorage.getItem('lat') !== null && localStorage.getItem('lng') !== null && typeof bm.Lat !== 'undefined' && typeof bm.Lng !== 'undefined') {
      const lat = Number(localStorage.getItem('lat'));
      const lng = Number(localStorage.getItem('lng'));
      const lat2 = bm.Lat;
      const lng2 = bm.Lng;
      const dist = Math.sqrt(Math.pow(lat - lat2, 2) + Math.pow(lng - lng2, 2));
      return dist
    } else {
      return 0;
    }
  }

  showItems() {
    if (this.markers.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  activateButton() {
    this.showButton = true;
  }

  getDistanceString(bmLat: number, bmLng: number) {
    if (localStorage.getItem('lat') !== null && localStorage.getItem('lng') !== null && typeof bmLat !== 'undefined' && typeof bmLng !== 'undefined') {
      const lat = Number(localStorage.getItem('lat'));
      const lng = Number(localStorage.getItem('lng'));
      const latDist = 111.13 * (bmLat - lat);
      const lngDist = 71.44 * (bmLng - lng);
      const dist = Number(Math.sqrt(Math.pow(latDist, 2) + Math.pow(lngDist, 2)).toFixed(2));
      if (dist >= 1) {
        return dist + 'km entfernt';
      } else {
        return Math.round(dist * 1000) + 'm entfernt';
      }
    } else {
      return '';
    }
  }

}
