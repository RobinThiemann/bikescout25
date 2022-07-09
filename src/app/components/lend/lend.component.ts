import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MarkerService } from 'src/app/shared/marker.service';
import { BikeMarker } from 'src/app/models/bikeMarker';

@Component({
  selector: 'app-lend',
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.css']
})
export class LendComponent implements OnInit {

  bikeName: string;
  portrait: string;
  lat: number;
  lng: number;
  bikeColour: string;
  bikeSize: string;


  constructor(private ms: MarkerService, private router: Router) { }

  ngOnInit(): void {
  }

  lend() {
    if (typeof this.bikeName === 'undefined' || this.bikeName === '') {
      const errorText = document.getElementById('bikeName');
      const error = document.getElementById('bikeName_input');
      if (error !== null && errorText !== null) {
        errorText.style.color = 'red';
        error.style.border = '1px solid red';
        const warning = document.getElementById('bikeErrorText');
        if (warning !== null) {
          warning.style.display = 'block';
        }
      }
    }
    if (typeof this.portrait === 'undefined' || this.portrait === '') {
      const errorText = document.getElementById('bikePortrait');
      const error = document.getElementById('bikePortrait_input');
      if (error !== null && errorText !== null) {
        errorText.style.color = 'red';
        error.style.border = '1px solid red';
        const warning = document.getElementById('bikeErrorText');
        if (warning !== null) {
          warning.style.display = 'block';
        }
      }
    }
    if (this.portrait === '' || this.bikeName === '') {
      return;
    }
    if (localStorage.getItem('lat') !== null && localStorage.getItem('lng') !== null) {
      this.lat = Number(localStorage.getItem('lat'));
      this.lng = Number(localStorage.getItem('lng'));
    }
    var newMarker: BikeMarker = {
      Email: localStorage.getItem('email')!,
      Lat: this.lat,
      Lng: this.lng,
      bikename: this.bikeName,
      portrait: this.portrait,
      colour: this.bikeColour,
      size: this.bikeSize
    };
    this.ms.addLend(newMarker);
    this.ms.addMarker(newMarker);
  }

  changeBike(event: any) {
    const name = document.getElementById('bikeName');
    const nameInput = document.getElementById('bikeName_input');
    if (name !== null && nameInput !== null) {
      name.style.color = '#000000';
      nameInput.style.border = '1px solid #000000';
    }
  }

  changePortrait(event: any) {
    const portrait = document.getElementById('bikePortrait');
    const portraitInput = document.getElementById('bikePortrait_input');
    if (portrait !== null && portraitInput !== null) {
      portrait.style.color = '#000000';
      portraitInput.style.border = '1px solid #000000';
    }
  }

  changeColour(event: any) {
    const Colour = document.getElementById('bikeColour');
    const ColourInput = document.getElementById('bikeColour_input');
    if (Colour !== null && ColourInput !== null) {
      Colour.style.color = '#000000';
      ColourInput.style.border = '1px solid #000000';
    }
  }

  changeSize(event: any) {
    const Size = document.getElementById('bikeSize');
    const SizeInput = document.getElementById('bikeSize_input');
    if (Size !== null && SizeInput !== null) {
      Size.style.color = '#000000';
      SizeInput.style.border = '1px solid #000000';
    }
  }

}
