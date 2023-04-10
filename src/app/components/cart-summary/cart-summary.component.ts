import { Component, OnInit } from '@angular/core';
import { CartDetail } from 'src/app/models/cartDetail';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent implements OnInit {
  cartDetail: CartDetail[];
  constructor(private cartService:CartService) {}
  ngOnInit(): void {
    this.getCart();
  }
  getCart(){
    this.cartService.getCart().subscribe((response)=>{
      this.cartDetail=response.data;
    })
  }
  // Eksiklik var
  // sistemde kayıtlı sepet bilgisini okuyabiliyor ama sepete eklenecek ürünü göndermiyor  
  
}
