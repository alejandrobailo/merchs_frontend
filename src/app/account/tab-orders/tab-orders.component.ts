import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-tab-orders',
  templateUrl: './tab-orders.component.html',
  styleUrls: ['./tab-orders.component.css']
})
export class TabOrdersComponent implements OnInit {

  arrOrders: any[];
  customerId: number;

  constructor(private ordersService: OrdersService) {
    this.customerId = parseInt(localStorage.getItem('customerIdKanala'));
  }

  ngOnInit() {
    this.ordersService.getAll(this.customerId)
      .then(response => {
        this.arrOrders = response;
        console.log(this.arrOrders);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
