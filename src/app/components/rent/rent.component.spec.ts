import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentComponent } from './rent.component';

describe('RentComponent', () => {
  let component: RentComponent;
  let fixture: ComponentFixture<RentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('distance testing'), () => {

    let a;
    let b;

    beforeEach (() => {
      a=4;
      b=9;
      
    })

  }
  it('should calculate dist', () => {
    //Act
    const result = component.getDistanceString (a, b);

    //Assert
  })


});
