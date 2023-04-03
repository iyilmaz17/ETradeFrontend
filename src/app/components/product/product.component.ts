import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product1: any = { productId: 1, productName: 'Rampge kb-r96' };
  product2: any = { productId: 2, productName: 'Mouse ' };
  product3: any = { productId: 3, productName: 'Lenovo L340' };
  product4: any = { productId: 4, productName: 'Kalemlik' };
  product5: any = { productId: 5, productName: 'Gözlük' };
  products = [this.product1, this.product2, this.product3, this.product4, this.product5]
}
