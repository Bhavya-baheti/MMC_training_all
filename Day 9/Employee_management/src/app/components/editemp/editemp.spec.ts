import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editemp } from './editemp';

describe('Editemp', () => {
  let component: Editemp;
  let fixture: ComponentFixture<Editemp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Editemp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Editemp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
