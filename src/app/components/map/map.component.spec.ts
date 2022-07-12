import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

  it('should display a message after clicking on it', () =>{
    component.click();

    expect(de.query(By.css('h1)).nativeElement.innerText.toBe('Möchten Sie ein Fahrrad ausleihen oder verleihen?')
  })

  

  it('should toggle the popup', () => {
    expect(component.showMessage).toBeFalsy();
    component.onClick();
    expect(component.showMessage).toBeTruthy();
  });

});
