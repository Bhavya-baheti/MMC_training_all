import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deleteemp } from './deleteemp';

describe('Deleteemp', () => {
  let component: Deleteemp;
  let fixture: ComponentFixture<Deleteemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deleteemp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deleteemp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
