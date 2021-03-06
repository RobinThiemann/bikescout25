import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { BikeMarker } from 'src/app/models/bikeMarker';

import { MarkerService } from '../../shared/marker.service';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  markers: BikeMarker[];
  @Output() update = new EventEmitter();

  private map: L.Map;
  private centroid: L.LatLngExpression = [49.0092096, 8.4040173];


  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 16
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });


    this.map.on('click', (e) => {
      if (localStorage.getItem('email') !== null) {
        localStorage.setItem('lat', (e as L.LeafletMouseEvent).latlng.lat.toString());
        localStorage.setItem('lng', (e as L.LeafletMouseEvent).latlng.lng.toString());
      }
      var popLocation = (e as L.LeafletMouseEvent).latlng;
      var popup = L.popup()
        .setLatLng(popLocation)
        .setContent('<p>Möchten Sie ein Fahrrad ausleihen oder verleihen?</p>')
        .openOn(this.map);
    });

    for (let i = 0; i < this.markers.length; i++) {
      let x = [this.markers[i].Lat, this.markers[i].Lng];
      let y = L.marker(x as L.LatLngExpression).addTo(this.map);
    }
    tiles.addTo(this.map);

  }

  constructor(private ms: MarkerService) { }

  ngOnInit(): void {
    this.ms.getMarkers().subscribe(marker => {
      this.markers = marker;
      this.initMap();
    });
  }
}