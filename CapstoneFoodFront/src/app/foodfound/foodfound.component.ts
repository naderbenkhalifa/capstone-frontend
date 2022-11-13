import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/capstoneFood-api/src/models';
import { FoodsService } from 'src/capstoneFood-api/src/services';

@Component({
  selector: 'app-foodfound',
  templateUrl: './foodfound.component.html',
  styleUrls: ['./foodfound.component.scss']
})
export class FoodfoundComponent implements OnInit {
  //food:Food={
    //price:0
  //};
  food:any;

  id: number=1;


 // message:string="";
 

  

  
  

  constructor(private foodService: FoodsService,private route: ActivatedRoute,private rout :Router) { }


  ngOnInit(): void {
    this.id=this.route.snapshot.params.idFood;
    console.log("FoodFoundComponent:ngOnInit: id="+this.id);
    if(this.id!=null){
    this.foodService.findById(this.id).subscribe(res=>{
      this.food=res;
    },
   error=>{
     // this.message="food not found";
      
    this.rout.navigate(['/foodnotfound']);


      
     });
    }
  }

}
