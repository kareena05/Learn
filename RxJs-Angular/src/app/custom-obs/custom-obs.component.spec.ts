import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomObsComponent } from './custom-obs.component';

describe('CustomObsComponent', () => {
  let component: CustomObsComponent;
  let fixture: ComponentFixture<CustomObsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomObsComponent]
    });
    fixture = TestBed.createComponent(CustomObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
