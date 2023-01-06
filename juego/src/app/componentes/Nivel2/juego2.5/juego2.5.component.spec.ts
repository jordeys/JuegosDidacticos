import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego25Component } from './juego2.5.component';

describe('Juego25Component', () => {
  let component: Juego25Component;
  let fixture: ComponentFixture<Juego25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego25Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
