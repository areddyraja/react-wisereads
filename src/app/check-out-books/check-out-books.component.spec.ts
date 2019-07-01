import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutBooksComponent } from './check-out-books.component';

describe('CheckOutBooksComponent', () => {
  let component: CheckOutBooksComponent;
  let fixture: ComponentFixture<CheckOutBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
