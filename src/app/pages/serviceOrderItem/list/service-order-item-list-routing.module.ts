import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceOrderItemListComponent } from './service-order-item-list.component';

const routes: Routes = [
    {
        path: '',
        component: ServiceOrderItemListComponent,
        data: { title: 'Service Order Item' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ServiceOrderItemListRoutingModule { }