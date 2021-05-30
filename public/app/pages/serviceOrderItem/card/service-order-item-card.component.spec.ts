import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderItemCardComponent } from './service-order-item-card.component';

describe('ServiceOrderItemCardComponent', () => {
  let component: ServiceOrderItemCardComponent;
  let fixture: ComponentFixture<ServiceOrderItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOrderItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOrderItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
