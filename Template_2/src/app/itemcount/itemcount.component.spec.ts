import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcountComponent } from './itemcount.component';

describe('ItemcountComponent', () => {
  let component: ItemcountComponent;
  let fixture: ComponentFixture<ItemcountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemcountComponent]
    });
    fixture = TestBed.createComponent(ItemcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
