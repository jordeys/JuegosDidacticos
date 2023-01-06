import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juego22Component } from './juego2.2.component';

describe('Juego22Component', () => {
  let component: Juego22Component;
  let fixture: ComponentFixture<Juego22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Juego22Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juego22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
