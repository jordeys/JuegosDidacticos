import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego33Component } from './juego3.3.component';

describe('Juego33Component', () => {
  let component: Juego33Component;
  let fixture: ComponentFixture<Juego33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego33Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
