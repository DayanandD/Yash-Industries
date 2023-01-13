import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualMaintenanceContractComponent } from './annual-maintenance-contract.component';

describe('AnnualMaintenanceContractComponent', () => {
  let component: AnnualMaintenanceContractComponent;
  let fixture: ComponentFixture<AnnualMaintenanceContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualMaintenanceContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualMaintenanceContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
