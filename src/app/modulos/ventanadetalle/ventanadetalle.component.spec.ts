import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanadetalleComponent } from './ventanadetalle.component';

describe('VentanadetalleComponent', () => {
  let component: VentanadetalleComponent;
  let fixture: ComponentFixture<VentanadetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentanadetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanadetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
