import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

}
