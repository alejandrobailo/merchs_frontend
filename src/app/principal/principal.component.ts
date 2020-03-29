import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  arrProducts: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAll()
      .then(response => {
        this.arrProducts = response;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
