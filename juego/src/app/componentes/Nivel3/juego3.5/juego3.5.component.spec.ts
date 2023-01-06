import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego35Component } from './juego3.5.component';

describe('Juego35Component', () => {
  let component: Juego35Component;
  let fixture: ComponentFixture<Juego35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego35Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
