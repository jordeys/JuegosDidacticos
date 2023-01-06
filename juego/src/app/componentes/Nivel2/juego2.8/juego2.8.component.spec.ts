import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego28Component } from './juego2.8.component';

describe('Juego28Component', () => {
  let component: Juego28Component;
  let fixture: ComponentFixture<Juego28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego28Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
