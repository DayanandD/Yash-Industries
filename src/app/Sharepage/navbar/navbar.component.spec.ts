import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});

// document.querySelectorAll('.dropdown-toggle').forEach(item => {
//   item.addEventListener('click', event => {
 
//     if(event.target.classList.contains('dropdown-toggle') ){
//       event.target.classList.toggle('toggle-change');
//     }
//     else if(event.target.parentElement.classList.contains('dropdown-toggle')){
//       event.target.parentElement.classList.toggle('toggle-change');
//     }
//   })
// });