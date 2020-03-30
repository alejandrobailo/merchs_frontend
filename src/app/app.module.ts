import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './product.service';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetailComponent } from './detail/detail.component';
import { AccountComponent } from './account/account.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TabPersonalInformationComponent } from './account/tab-personal-information/tab-personal-information.component';
import { TabOrdersComponent } from './account/tab-orders/tab-orders.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PrincipalComponent,
    DetailComponent,
    AccountComponent,
    ProductDetailComponent,
    TabPersonalInformationComponent,
    TabOrdersComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
