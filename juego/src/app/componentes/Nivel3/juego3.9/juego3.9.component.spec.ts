import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego39Component } from './juego3.9.component';

describe('Juego39Component', () => {
  let component: Juego39Component;
  let fixture: ComponentFixture<Juego39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego39Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
