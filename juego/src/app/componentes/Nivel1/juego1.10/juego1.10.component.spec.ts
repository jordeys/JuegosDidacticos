import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego110Component } from './juego1.10.component';

describe('Juego110Component', () => {
  let component: Juego110Component;
  let fixture: ComponentFixture<Juego110Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego110Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
