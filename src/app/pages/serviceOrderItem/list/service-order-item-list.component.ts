import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError, debounceTime, map, startWith } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { ServiceOrderItem } from 'src/app/shared/models/service-order-item.model';
import { ServiceOrderItemAddComponent } from '../add/service-order-item-add.component';

@Component({
  selector: 'app-service-order-item-list',
  templateUrl: './service-order-item-list.component.html',
  styleUrls: ['./service-order-item-list.component.scss']
})
export class ServiceOrderItemListComponent implements OnInit {

  title = 'Service Order Items';
  list$: Observable<ServiceOrderItem[]> | null = null;
  errorObject = null;
  formGroup: FormGroup = new FormGroup({searchControl: new FormControl('')});

  constructor(private service: FbBaseService<ServiceOrderItem>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    this.formGroup.get('searchControl')!.valueChanges.subscribe((value: string) => {
      this.list$ = this.service.getWithSearch('serviceOrderItems', 'action', value);
    })
  }

  get(): void {
    this.list$ = this.service.get('serviceOrderItems');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ServiceOrderItemAddComponent, {});
    dialogRef.afterClosed().subscribe((serviceOrderItem: ServiceOrderItem) => {
      console.log(serviceOrderItem);
      if (serviceOrderItem?.action) {
        this.service.add('serviceOrderItems', serviceOrderItem).then(id => { console.log(id); });
      }
    }, err => {
      console.warn(err);
    });
  }

}
