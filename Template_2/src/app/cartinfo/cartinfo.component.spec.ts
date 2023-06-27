import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartinfoComponent } from './cartinfo.component';

describe('CartinfoComponent', () => {
  let component: CartinfoComponent;
  let fixture: ComponentFixture<CartinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartinfoComponent]
    });
    fixture = TestBed.createComponent(CartinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
