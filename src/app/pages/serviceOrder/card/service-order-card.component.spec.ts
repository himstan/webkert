import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderCardComponent } from './service-order-card.component';

describe('ServiceOrderCardComponent', () => {
  let component: ServiceOrderCardComponent;
  let fixture: ComponentFixture<ServiceOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOrderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
