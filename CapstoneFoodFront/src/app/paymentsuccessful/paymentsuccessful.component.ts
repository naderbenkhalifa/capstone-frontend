import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-paymentsuccessful',
  templateUrl: './paymentsuccessful.component.html',
  styleUrls: ['./paymentsuccessful.component.scss']
})
export class PaymentsuccessfulComponent implements OnInit {
  totalPrice: number=0;
  totalQuantity: number=0;

 

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe( 
      data => this.totalQuantity = data
    );

    // compute cart total price and quantity
    this.cartService.computeCartTotals();
  }
   
  }
 
    


