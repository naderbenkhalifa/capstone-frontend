import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Food, Payment, Purchase, PurchaseItem, User } from 'src/capstoneFood-api/src/models';
import { PurchaseitemsService, PurchasesService, UsersService } from 'src/capstoneFood-api/src/services';
import { CartItem } from '../cart-item';
import { CartService } from '../services/cart.service';
import { PurchaseServiceService } from '../services/purchase-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  payment:Payment={};
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  user:any
  //purchaseService: any;
  newPurchase: any;

    

  
  
  constructor(private cartService: CartService,private router :Router,private purchaseService :PurchasesService) { 
   

  }


  ngOnInit(): void {
    this.listCartDetails();
  }
  listCartDetails() {

    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
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

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }
  purchaseFood(){
    let newPurchase:Purchase={};
    
     
    newPurchase.user=this.user;
  
   
 

    
    let currentDate = new Date();
    newPurchase.dateOfPurchase=currentDate.toISOString();
    newPurchase.totalcost=this.totalPrice;
    newPurchase.purchaseItems=[];
    for(let p of this.cartItems){
      let purchaseItem: PurchaseItem={};
     
      purchaseItem.food=p;
      purchaseItem.quantity=1;
    

      newPurchase.purchaseItems.push(purchaseItem)
      
   


    }
    this.purchaseService.save(newPurchase).subscribe(res =>{
      this.newPurchase=res;
     
     this.totalPrice=this.cartService. getTotalPrice();
    // this.cartService.totalPrice.subscribe(
      //data => this.totalPrice = data
    // );
     this.payment.totalAmount=this.totalPrice;
    // this.payment.totalAmount=this.totalPrice;
  
      this.cartService.resetCart();
     
     
     
     

    });
    this.router.navigate(['/payment']);

   

  
 
   
     
     
   
 


      
        
      }
      resetCart(){
        this.cartService.resetCart();
        this.listCartDetails();

      
      }
}

