import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from 'src/capstoneFood-api/src/models';
import { FoodsService } from 'src/capstoneFood-api/src/services';

@Component({
  selector: 'app-searchfood',
  templateUrl: './searchfood.component.html',
  styleUrls: ['./searchfood.component.scss']
})
export class SearchfoodComponent implements OnInit {
  //food:Food={
    //price:0
  //};
  food:any;
//id:number=1;
id:any
  constructor(private router:Router) { }
  public getFoodById(id:number){
    console.log("getFoodById: id="+id);
    this.router.navigate(['/foodFound',id]);
  }

  ngOnInit(): void {
  }
  

}
