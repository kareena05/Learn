import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappComponent } from './mapp.component';

describe('MappComponent', () => {
  let component: MappComponent;
  let fixture: ComponentFixture<MappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MappComponent]
    });
    fixture = TestBed.createComponent(MappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
