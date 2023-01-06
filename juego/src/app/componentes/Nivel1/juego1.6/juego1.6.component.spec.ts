import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego16Component } from './juego1.6.component';

describe('Juego16Component', () => {
  let component: Juego16Component;
  let fixture: ComponentFixture<Juego16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
