import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'cypress/types/bluebird';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
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
      console.log(e.latlng.lat,e.latlng.lng);
      var coords= e.latlng.lat + ", " + e.latlng.lng;
      
      var popLocation= e.latlng;
        var popup = L.popup()
        .setLatLng(popLocation)
        .setContent('<p>Hello world!<br />This is a nice popup.</p>')
        .openOn(this.map);
      
      console.log(coords);
      this.map.fireEvent("click", coords);
    });

    // create 5 random jitteries and add them to map
    const jittery = Array(100).fill(this.centroid).map(
      x => [x[0] + (Math.random() - 0.5) / 100, x[1] + (Math.random() - .5) / 10]
    ).map(
      x => L.marker(x as L.LatLngExpression)
    ).forEach(
      x => x.addTo(this.map)
    );



    tiles.addTo(this.map);

  }

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

}