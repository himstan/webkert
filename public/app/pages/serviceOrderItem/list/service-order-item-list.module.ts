import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContainerModule } from './../../../shared/components/container/container.module';
import { ServiceOrderItemCardModule } from './../card/service-order-item-card.module';
import { ServiceOrderItemAddModule } from './../add/service-order-item-add.module';
import { ServiceOrderItemListRoutingModule } from './service-order-item-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ServiceOrderItemListComponent } from './service-order-item-list.component';



@NgModule({
  declarations: [ServiceOrderItemListComponent],
  imports: [
    CommonModule, ServiceOrderItemListRoutingModule, MatToolbarModule, ContainerModule, ServiceOrderItemCardModule, MatButtonModule, MatIconModule, ServiceOrderItemAddModule,
    MatAutocompleteModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule
  ]
})
export class ServiceOrderItemListModule { }
