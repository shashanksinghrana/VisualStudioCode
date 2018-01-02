import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test Description','http://www.seriouseats.com/images/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1.jpg'),
    new Recipe('A Test Recipe', 'Test Description','http://www.seriouseats.com/images/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1.jpg')
  ];

  
  constructor() { 
    //console.log(this.recipes[0].name);
  }

  ngOnInit() {
   
  }

}
