import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPageViewComponent } from './review-page-view.component';

describe('ReviewPageViewComponent', () => {
  let component: ReviewPageViewComponent;
  let fixture: ComponentFixture<ReviewPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
