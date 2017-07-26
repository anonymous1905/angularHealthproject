import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerComponent } from './dinner.component';

describe('DinnerComponent', () => {
  let component: DinnerComponent;
  let fixture: ComponentFixture<DinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
