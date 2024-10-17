import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRegisterComponent } from './container-register.component';

describe('ContainerRegisterComponent', () => {
  let component: ContainerRegisterComponent;
  let fixture: ComponentFixture<ContainerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
