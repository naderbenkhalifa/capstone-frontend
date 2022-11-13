import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-loginsucces',
  templateUrl: './loginsucces.component.html',
  styleUrls: ['./loginsucces.component.scss']
})
export class LoginsuccesComponent implements OnInit {
  totalPrice: number=0;
  totalQuantity: number=0;

  constructor(private cartService: CartService,private router:Router) { }

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
  
  logout(){
    this.router.navigate(['/login']);
    this.cartService.resetCart();

  }

}
