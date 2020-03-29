import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TabOrdersComponent } from './account/tab-orders/tab-orders.component';
import { TabPersonalInformationComponent } from './account/tab-personal-information/tab-personal-information.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  {
    path: 'account', component: AccountComponent, children: [
      {
        path: 'tab-orders', component: TabOrdersComponent,
      },
      {
        path: 'tab-personal-information', component: TabPersonalInformationComponent,
      }
    ]
  },
  { path: 'product/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
