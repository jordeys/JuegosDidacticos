import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego18Component } from './juego1.8.component';

describe('Juego18Component', () => {
  let component: Juego18Component;
  let fixture: ComponentFixture<Juego18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
