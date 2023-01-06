import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego19Component } from './juego1.9.component';

describe('Juego19Component', () => {
  let component: Juego19Component;
  let fixture: ComponentFixture<Juego19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego19Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
