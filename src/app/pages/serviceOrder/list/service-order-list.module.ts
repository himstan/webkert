import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { ServiceOrderListComponent } from './service-order-list.component';
import { ServiceOrderListRoutingModule } from './service-order-item-list-routing.module';
import { ServiceOrderCardModule } from '../card/service-order-card.module';
import { ServiceOrderAddModule } from '../add/service-order-add.module';



@NgModule({
  declarations: [ServiceOrderListComponent],
  imports: [
    CommonModule, ServiceOrderListRoutingModule, MatToolbarModule,
     ContainerModule, ServiceOrderCardModule, MatButtonModule, MatIconModule, ServiceOrderAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule
  ]
})
export class ServiceOrderListModule { }
