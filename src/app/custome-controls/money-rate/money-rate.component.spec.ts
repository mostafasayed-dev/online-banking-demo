import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyRateComponent } from './money-rate.component';

describe('MoneyRateComponent', () => {
  let component: MoneyRateComponent;
  let fixture: ComponentFixture<MoneyRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
