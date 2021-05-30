import { Router } from '@angular/router';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { ServiceOrderItem } from 'src/app/shared/models/service-order-item.model';
import { ServiceOrder } from 'src/app/shared/models/service-order.model';

@Component({
  selector: 'app-service-order-card',
  templateUrl: './service-order-card.component.html',
  styleUrls: ['./service-order-card.component.scss']
})
export class ServiceOrderCardComponent implements OnInit {

  @Input() serviceOrder?: ServiceOrder;

  constructor(private service: FbBaseService<ServiceOrderItem>, private router: Router) { }

  ngOnInit(): void {
  }

  removeServiceOrder(): void {
    if (this.serviceOrder !== undefined) {
      this.service.delete('serviceOrder', this.serviceOrder.id);
    }
  }

  route(): void {
    if (this.serviceOrder !== undefined) {
      this.router.navigateByUrl(`home/details/serviceOrder/${this.serviceOrder.id}`);
    }
  }



}
