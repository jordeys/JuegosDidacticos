import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego31Component } from './juego3.1.component';

describe('Juego31Component', () => {
  let component: Juego31Component;
  let fixture: ComponentFixture<Juego31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego31Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
