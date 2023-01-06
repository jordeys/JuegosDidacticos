import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego32Component } from './juego3.2.component';

describe('Juego32Component', () => {
  let component: Juego32Component;
  let fixture: ComponentFixture<Juego32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego32Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
