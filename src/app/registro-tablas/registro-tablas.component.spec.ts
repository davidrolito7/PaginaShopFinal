import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTablasComponent } from './registro-tablas.component';

describe('RegistroTablasComponent', () => {
  let component: RegistroTablasComponent;
  let fixture: ComponentFixture<RegistroTablasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroTablasComponent]
    });
    fixture = TestBed.createComponent(RegistroTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
