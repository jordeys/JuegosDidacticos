import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego23Component } from './juego2.3.component';

describe('Juego23Component', () => {
  let component: Juego23Component;
  let fixture: ComponentFixture<Juego23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego23Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
