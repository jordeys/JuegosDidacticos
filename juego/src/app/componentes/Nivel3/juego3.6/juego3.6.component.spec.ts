import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego36Component } from './juego3.6.component';

describe('Juego36Component', () => {
  let component: Juego36Component;
  let fixture: ComponentFixture<Juego36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego36Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
