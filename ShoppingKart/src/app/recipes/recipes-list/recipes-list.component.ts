import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

 recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test Description','http://www.seriouseats.com/images/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1.jpg'),
    new Recipe('Another Test Recipe', 'Test Description','https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();  
  constructor() { 
    //console.log(this.recipes[0].name);
  }

  ngOnInit() {
   
  }
  getRecipeDetail(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
