import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3Component } from './comp3.component';

describe('Comp3Component', () => {
  let component: Comp3Component;
  let fixture: ComponentFixture<Comp3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Comp3Component]
    });
    fixture = TestBed.createComponent(Comp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
