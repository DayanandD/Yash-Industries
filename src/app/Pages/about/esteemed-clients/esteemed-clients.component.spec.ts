import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsteemedClientsComponent } from './esteemed-clients.component';

describe('EsteemedClientsComponent', () => {
  let component: EsteemedClientsComponent;
  let fixture: ComponentFixture<EsteemedClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsteemedClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsteemedClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
