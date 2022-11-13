import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/capstoneFood-api/src/models';
import { UsersService } from 'src/capstoneFood-api/src/services';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User={};
  totalPrice: any;
  totalQuantity: any;
  
  
 

 
 
  constructor(public  userService:UsersService ,public  route: Router,private cartService: CartService) { 
    
    
  }
  public  signIn(){
    this.userService.addUserLogin(this.user).subscribe(res=>{
      this.route.navigate(['/loginsucces'])
      
     
      
    })
  }
 
  

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
