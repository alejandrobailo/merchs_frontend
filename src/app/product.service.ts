import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = this.baseUrl = 'http://localhost:3000/api/products';
  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }

  getById(sku): Promise<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${sku}`).toPromise();
  }
}
