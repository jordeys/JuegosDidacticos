import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego310Component } from './juego3.10.component';

describe('Juego310Component', () => {
  let component: Juego310Component;
  let fixture: ComponentFixture<Juego310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego310Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
