import { FbBaseService } from './../../services/fb-base.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceOrderStateType } from 'src/app/shared/models/service-order-state-type.enum';
import { ServiceOrder } from 'src/app/shared/models/service-order.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id = '';
  dataNameStr = '';
  inData: Observable<any> | null = null;
  serviceOrder: ServiceOrder | undefined;

  form: FormGroup = new FormGroup({
    description: new FormControl('', Validators.required),
    cancelllationDate : new FormControl(new Date()),
    cancellationReason : new FormControl(""),
    category : new FormControl(""),
    completionDate : new FormControl(new Date()),
    expectedCompletionDate : new FormControl(new Date()),
    externalId : new FormControl(""),
    externalReference : new FormControl([]),
    href : new FormControl(""),
    note : new FormControl([]),
    notificationContact : new FormControl(""),
    orderDate : new FormControl(new Date()),
    orderRelationship : new FormControl([]),
    priority : new FormControl(""),
    relatedParty : new FormControl([]),
    requestedCompletionDate : new FormControl(new Date()),
    requestedStartDate : new FormControl(new Date()),
    serviceOrderItem : new FormControl({}),
    startDate : new FormControl(new Date()),
    state : new FormControl(ServiceOrderStateType.pending),
  });

  constructor(private route: ActivatedRoute, private service: FbBaseService<any>, private location: Location) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.dataNameStr = params.dataNameStr;
      this.getItem();
    }
    console.log(this.id, this.dataNameStr);
  }

  getItem(): void {
    this.inData = this.service.getById(this.dataNameStr, this.id);
    this.inData.subscribe((data) => {
      this.serviceOrder = data;
      this.mapFormToNewService();
    });
  }

  close(): void {
    this.location.back();
  }

  save(): void {
    if (this.serviceOrder !== undefined) {
      let newServiceOrder = this.form.value;
      this.serviceOrder.description = newServiceOrder.description;
      this.service.update('serviceOrder', this.serviceOrder?.id, newServiceOrder);
    }
  }

  mapFormToNewService(): void {
    this.form.patchValue({description: this.serviceOrder?.description,
                          category: this.serviceOrder?.category,
                          notificationContact: this.serviceOrder?.notificationContact,
                          priority: this.serviceOrder?.priority});
  }

}
