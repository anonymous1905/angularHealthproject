import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekplanComponent } from './weekplan.component';

describe('WeekplanComponent', () => {
  let component: WeekplanComponent;
  let fixture: ComponentFixture<WeekplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
