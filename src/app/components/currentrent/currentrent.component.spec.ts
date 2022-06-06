import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentrentComponent } from './currentrent.component';

describe('CurrentrentComponent', () => {
  let component: CurrentrentComponent;
  let fixture: ComponentFixture<CurrentrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
