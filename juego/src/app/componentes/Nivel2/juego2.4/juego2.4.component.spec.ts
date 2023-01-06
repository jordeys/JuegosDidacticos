import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego24Component } from './juego2.4.component';

describe('Juego24Component', () => {
  let component: Juego24Component;
  let fixture: ComponentFixture<Juego24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego24Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
