import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutBooksComponent } from './checkout-books.component';

describe('CheckoutBooksComponent', () => {
  let component: CheckoutBooksComponent;
  let fixture: ComponentFixture<CheckoutBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
