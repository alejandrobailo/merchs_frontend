import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = this.baseUrl = 'http://localhost:3000/api/products';
  }

  getAll(): Promise<any> {
    return this.httpClient.get(this.baseUrl).toPromise();
  }

  getDetailById(pSku): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${pSku}`).toPromise();
  }
}
