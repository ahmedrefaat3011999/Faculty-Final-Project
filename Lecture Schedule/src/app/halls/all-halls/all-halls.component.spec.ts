import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHallsComponent } from './all-halls.component';

describe('AllHallsComponent', () => {
  let component: AllHallsComponent;
  let fixture: ComponentFixture<AllHallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllHallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
