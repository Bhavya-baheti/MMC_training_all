import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Currentopenings } from './currentopenings';

describe('Currentopenings', () => {
  let component: Currentopenings;
  let fixture: ComponentFixture<Currentopenings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Currentopenings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Currentopenings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
