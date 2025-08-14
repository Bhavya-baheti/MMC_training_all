import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empculture } from './empculture';

describe('Empculture', () => {
  let component: Empculture;
  let fixture: ComponentFixture<Empculture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empculture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empculture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
