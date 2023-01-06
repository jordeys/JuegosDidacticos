import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego37Component } from './juego3.7.component';

describe('Juego37Component', () => {
  let component: Juego37Component;
  let fixture: ComponentFixture<Juego37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego37Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
