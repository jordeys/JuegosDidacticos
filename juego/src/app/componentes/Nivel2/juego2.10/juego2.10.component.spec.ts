import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego210Component } from './juego2.10.component';

describe('Juego210Component', () => {
  let component: Juego210Component;
  let fixture: ComponentFixture<Juego210Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego210Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
