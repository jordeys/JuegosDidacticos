import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego26Component } from './juego2.6.component';

describe('Juego26Component', () => {
  let component: Juego26Component;
  let fixture: ComponentFixture<Juego26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego26Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
