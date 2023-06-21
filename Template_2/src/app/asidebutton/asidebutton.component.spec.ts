import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidebuttonComponent } from './asidebutton.component';

describe('AsidebuttonComponent', () => {
  let component: AsidebuttonComponent;
  let fixture: ComponentFixture<AsidebuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsidebuttonComponent]
    });
    fixture = TestBed.createComponent(AsidebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
