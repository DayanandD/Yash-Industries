import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemIntegratorComponent } from './system-integrator.component';

describe('SystemIntegratorComponent', () => {
  let component: SystemIntegratorComponent;
  let fixture: ComponentFixture<SystemIntegratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemIntegratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemIntegratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
