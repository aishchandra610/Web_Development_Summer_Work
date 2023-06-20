import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRegisterComponent } from './button-register.component';

describe('ButtonRegisterComponent', () => {
  let component: ButtonRegisterComponent;
  let fixture: ComponentFixture<ButtonRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonRegisterComponent]
    });
    fixture = TestBed.createComponent(ButtonRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
