import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSystemsComponent } from './projects-systems.component';

describe('ProjectsSystemsComponent', () => {
  let component: ProjectsSystemsComponent;
  let fixture: ComponentFixture<ProjectsSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
