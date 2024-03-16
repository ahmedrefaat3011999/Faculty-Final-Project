import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHallsComponent } from './add-halls.component';

describe('AddHallsComponent', () => {
  let component: AddHallsComponent;
  let fixture: ComponentFixture<AddHallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
