import { Note } from './../../../shared/models/note.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceOrderStateType } from 'src/app/shared/models/service-order-state-type.enum';

@Component({
  selector: 'app-service-order-add',
  templateUrl: './service-order-add.component.html',
  styleUrls: ['./service-order-add.component.scss']
})
export class ServiceOrderAddComponent implements OnInit {

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

  constructor(public dialogRef: MatDialogRef<ServiceOrderAddComponent>) { }

  ngOnInit(): void {
  }

}
