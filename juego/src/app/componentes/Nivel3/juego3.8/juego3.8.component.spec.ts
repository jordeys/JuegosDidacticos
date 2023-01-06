import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego38Component } from './juego3.8.component';

describe('Juego38Component', () => {
  let component: Juego38Component;
  let fixture: ComponentFixture<Juego38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego38Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
