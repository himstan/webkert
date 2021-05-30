import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },
            {
                path: 'orderItems',
                loadChildren: () => import('./../serviceOrderItem/list/service-order-item-list.module').then(m => m.ServiceOrderItemListModule),
            },
            {
              path: 'orders',
              loadChildren: () => import('./../serviceOrder/list/service-order-list.module').then(m => m.ServiceOrderListModule),
            },
            {
              path: 'details',
              loadChildren: () => import('./../details/details.module').then(m => m.DetailsModule)
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
