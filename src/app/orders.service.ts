import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = this.baseUrl = 'http://localhost:3000/api/orders';
  }

  getAll(id): Promise<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<any[]>(this.baseUrl, { customerId: id }, httpOptions).toPromise();
  }

  createOrder(cart): Promise<any> {
    const body = {
      order_status: 'completed',
      customerId: cart[0].customerId,
      totalAmount: cart.totalAmount
    };
    return this.httpClient.post(`${this.baseUrl}/new`, body).toPromise();
  }

  createOrderItem(cartItem): Promise<any> {
    const body = {
      sku: cartItem.sku,
      size: cartItem.size,
      quantityToSubstract: cartItem.quantity
    };
    return this.httpClient.post(`${this.baseUrl}/new/items`, body).toPromise();
  }
}
