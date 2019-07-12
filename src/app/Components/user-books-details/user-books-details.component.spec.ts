import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBooksDetailsComponent } from './user-books-details.component';

describe('UserBooksDetailsComponent', () => {
  let component: UserBooksDetailsComponent;
  let fixture: ComponentFixture<UserBooksDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBooksDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBooksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
