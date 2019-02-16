import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsDetailPageComponent } from './pools-detail-page.component';

describe('PoolsDetailPageComponent', () => {
  let component: PoolsDetailPageComponent;
  let fixture: ComponentFixture<PoolsDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolsDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
