import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradoPorcomandoComponent } from './generado-porcomando.component';

describe('GeneradoPorcomandoComponent', () => {
  let component: GeneradoPorcomandoComponent;
  let fixture: ComponentFixture<GeneradoPorcomandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneradoPorcomandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradoPorcomandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
