import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderItemAddComponent } from './service-order-item-add.component';

describe('ServiceOrderItemAddComponent', () => {
  let component: ServiceOrderItemAddComponent;
  let fixture: ComponentFixture<ServiceOrderItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOrderItemAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOrderItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
