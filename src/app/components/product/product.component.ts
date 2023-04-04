import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/produtcResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
    });
  }
}

/*
product1 = {ProductId:1,
    ProductCode:'2',
    ProductName:'sdaf',
    Barcode:'12313',
    UnitPrice:654,
    TaxRate:564,
    AddedDate:'',
    Stock:4,
    Brand:'sdv',
    Status:true,
    Description:'',
    Image:'fs',
    CategoryId:1
  };

*/
