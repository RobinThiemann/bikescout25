import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendBikeOverviewComponent } from './lend-bike-overview.component';

describe('LendBikeOverviewComponent', () => {
  let component: LendBikeOverviewComponent;
  let fixture: ComponentFixture<LendBikeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendBikeOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LendBikeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
