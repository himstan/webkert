import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { startWith, debounceTime, map, catchError } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { ServiceOrder } from 'src/app/shared/models/service-order.model';
import { ServiceOrderAddComponent } from '../add/service-order-add.component';

@Component({
  selector: 'app-service-order-list',
  templateUrl: './service-order-list.component.html',
  styleUrls: ['./service-order-list.component.scss']
})
export class ServiceOrderListComponent implements OnInit {

  title = 'Service Orders';
  list$: Observable<ServiceOrder[]> | null = null;

  formGroup: FormGroup = new FormGroup({searchControl: new FormControl('')});

  filteredOptions$: Observable<string[]> | null = null;

  errorObject = null;

  constructor(private service: FbBaseService<ServiceOrder>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    this.filteredOptions$ = this.formGroup.get('searchControl')!.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300)
      );
      this.formGroup.get('searchControl')!.valueChanges.subscribe((value: string) => {
        this.list$ = this.service.getWithSearch('serviceOrder', 'description', value);
    })
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('serviceOrder').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ServiceOrderAddComponent, {});
    dialogRef.afterClosed().subscribe((serviceOrder: ServiceOrder) => {
      console.log(serviceOrder);
      if (serviceOrder?.description) {
        this.service.add('serviceOrder', serviceOrder).then(id => { console.log(id); });
      }
    }, err => {
      console.warn(err);
    });
  }

}
