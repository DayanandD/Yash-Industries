import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignagesComponent } from './signages.component';

describe('SignagesComponent', () => {
  let component: SignagesComponent;
  let fixture: ComponentFixture<SignagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
