import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/login';
  }

  /*   registro(formValues): Promise<any> {
      return this.httpClient.post(`${this.baseUrl}/register`, formValues).toPromise();
    };
   */

  login(formValues): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}`, formValues).toPromise();
  }
}
