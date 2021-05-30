import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderAddComponent } from './service-order-add.component';

describe('ServiceOrderAddComponent', () => {
  let component: ServiceOrderAddComponent;
  let fixture: ComponentFixture<ServiceOrderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOrderAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOrderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
