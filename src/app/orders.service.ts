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

  createOrder(order): Promise<any> {
    const body = {
      customerId: order[0].customerId,
      order_status: 'completed',
      // Habría que pasarle todas las tallas de todos los productos y sus cantidades, pero como no me da la olla, le paso solamente el primero, por tanto solo crea un pedido del primer producto que haya en el carrito
      sku: order[0].sku,
      size: order[0].size,
      quantity: order[0].quantity
    };
    return this.httpClient.post(`${this.baseUrl}/new`, body).toPromise();
  }
}
