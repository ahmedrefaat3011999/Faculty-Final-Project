import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComlaintDetailsComponent } from './comlaint-details.component';

describe('ComlaintDetailsComponent', () => {
  let component: ComlaintDetailsComponent;
  let fixture: ComponentFixture<ComlaintDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComlaintDetailsComponent]
    });
    fixture = TestBed.createComponent(ComlaintDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
