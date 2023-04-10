import { Injectable } from '@angular/core';
import { CartDetail } from '../models/cartDetail';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  apiUrl = 'https://localhost:44339/api/Cart/aaaa?userId=1';
  constructor(private httpClient: HttpClient) {}
  /*
  addToCart(produtcId: number) {
    let item = CartItems.find((c) => c.productId == produtcId);
    if (item) {
      item.amount += 1;
    } else {
      let cartItem = new CartDetail();
      cartItem.amount = 1;
      cartItem.cartCode = '0000';
      cartItem.productId = 1;
      cartItem.status = true;
      CartItems.push();
    }
  } */

  getCart(): Observable<ListResponseModel<CartDetail>> {
    return this.httpClient.get<ListResponseModel<CartDetail>>(this.apiUrl);
  }
}
