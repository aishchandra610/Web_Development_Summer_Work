import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContainerComponent } from './dynamic-container.component';

describe('DynamicContainerComponent', () => {
  let component: DynamicContainerComponent;
  let fixture: ComponentFixture<DynamicContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicContainerComponent]
    });
    fixture = TestBed.createComponent(DynamicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
