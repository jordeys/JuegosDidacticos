import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego34Component } from './juego3.4.component';

describe('Juego34Component', () => {
  let component: Juego34Component;
  let fixture: ComponentFixture<Juego34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego34Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
