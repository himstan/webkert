import { OrderItemActionType } from './../../../shared/models/order-item-action-type.enum';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceOrderItemStateType } from 'src/app/shared/models/service-order-item-state-type.enum';

@Component({
  selector: 'app-service-order-item-add',
  templateUrl: './service-order-item-add.component.html',
  styleUrls: ['./service-order-item-add.component.scss']
})
export class ServiceOrderItemAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    action: new FormControl(OrderItemActionType.noChange),
    appointment : new FormControl({description: "", id:""}),
    id : new FormControl(""),
    quantity : new FormControl(1, Validators.required),
    service : new FormControl({name: "", id: ""}),
    serviceOrderItem : new FormControl([]),
    serviceOrderItemRelationship : new FormControl([]),
    state : new FormControl(ServiceOrderItemStateType.pending),
  });

  constructor(public dialogRef: MatDialogRef<ServiceOrderItemAddComponent>) { }
  actions: string[] = [];
  states: string[] = [];
  ngOnInit(): void {
    this.actions = Object.keys(OrderItemActionType).filter(k => typeof OrderItemActionType[k as any] === "number");
    this.states = Object.keys(ServiceOrderItemStateType).filter(k => typeof ServiceOrderItemStateType[k as any] === "number");
  }

}
