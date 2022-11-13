import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from 'src/capstoneFood-api/src/models';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  public cartItemList:Food[]=[];
  public foodList = new BehaviorSubject<any>([]);
 totalprice:number=0;


 

  constructor() { }
  addToCart(food:Food){
    this.cartItemList.push(food);
    this.foodList.next(this.cartItemList);
    this.getTotalPrice(); 
    
    
  }
  getFood(){
    return this.foodList.asObservable();
    
  }

  getTotalPrice() :number{
   
    let grandTotal = 0;
    this.cartItemList.map((a:Food)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  resetCart(){
    this.cartItemList=[];
    this.foodList.next(this.cartItemList);
    this.getTotalPrice(); 
  }

}
