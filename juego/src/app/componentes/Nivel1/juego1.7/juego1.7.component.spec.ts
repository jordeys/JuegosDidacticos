import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego17Component } from './juego1.7.component';

describe('Juego17Component', () => {
  let component: Juego17Component;
  let fixture: ComponentFixture<Juego17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
