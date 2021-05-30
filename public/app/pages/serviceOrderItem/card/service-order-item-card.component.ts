import { Component, Input, OnInit } from '@angular/core';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { ServiceOrderItem } from 'src/app/shared/models/service-order-item.model';

@Component({
  selector: 'app-service-order-item-card',
  templateUrl: './service-order-item-card.component.html',
  styleUrls: ['./service-order-item-card.component.scss']
})
export class ServiceOrderItemCardComponent implements OnInit {

  @Input() serviceOrderItem?: ServiceOrderItem;

  constructor(private service: FbBaseService<ServiceOrderItem>) { }

  ngOnInit(): void {
  }

  remove() {
    if (this.serviceOrderItem !== undefined) {
      this.service.delete('serviceOrderItems', this.serviceOrderItem.id);
    }
  }

}
