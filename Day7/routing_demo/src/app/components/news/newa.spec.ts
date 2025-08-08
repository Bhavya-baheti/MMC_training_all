import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newa } from './newa';

describe('Newa', () => {
  let component: Newa;
  let fixture: ComponentFixture<Newa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
