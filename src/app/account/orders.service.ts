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

  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }
}
