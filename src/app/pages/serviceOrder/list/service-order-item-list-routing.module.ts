import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceOrderListComponent } from './service-order-list.component';

const routes: Routes = [
    {
        path: '',
        component: ServiceOrderListComponent,
        data: { title: 'Service Orders' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ServiceOrderListRoutingModule { }
