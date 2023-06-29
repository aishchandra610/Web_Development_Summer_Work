import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentsComponent } from './dynamic-components.component';

describe('DynamicComponentsComponent', () => {
  let component: DynamicComponentsComponent;
  let fixture: ComponentFixture<DynamicComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicComponentsComponent]
    });
    fixture = TestBed.createComponent(DynamicComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
