import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego29Component } from './juego2.9.component';

describe('Juego29Component', () => {
  let component: Juego29Component;
  let fixture: ComponentFixture<Juego29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego29Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
