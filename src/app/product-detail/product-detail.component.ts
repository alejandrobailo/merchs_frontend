import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  size: number;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      this.product = await this.productService.getById(parseInt(params.id, 10));
    });
  }

  handleSelectSize(event) {
    return this.size = event.target.value;
  }

  handleAddToCart(sku, size) {
    console.log('sku:', sku, 'size:', size);
  }

}
