import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego21Component } from './juego2.1.component';

describe('Juego21Component', () => {
  let component: Juego21Component;
  let fixture: ComponentFixture<Juego21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
