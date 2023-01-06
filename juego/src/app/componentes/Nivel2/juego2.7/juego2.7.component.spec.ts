import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego27Component } from './juego2.7.component';

describe('Juego27Component', () => {
  let component: Juego27Component;
  let fixture: ComponentFixture<Juego27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego27Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
