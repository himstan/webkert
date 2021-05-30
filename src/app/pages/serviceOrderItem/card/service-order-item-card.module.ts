import { OnHoverModule } from './../../../shared/directives/on-hover/on-hover.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ServiceOrderItemCardComponent } from './service-order-item-card.component';



@NgModule({
  declarations: [ServiceOrderItemCardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, OnHoverModule
  ],
  exports: [ServiceOrderItemCardComponent]
})
export class ServiceOrderItemCardModule { }
