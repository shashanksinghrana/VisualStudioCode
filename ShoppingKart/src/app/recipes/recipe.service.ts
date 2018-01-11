import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Chicken Bread',
     'Deleicious continental',
     'http://www.seriouseats.com/images/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1.jpg',
     [new Ingredient('Chicken', 1),
     new Ingredient('Bread', 4)]),
    new Recipe('Full On Chicken', 
    'Cheicken breast minced with Lemon and Onion',
    'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
    [new Ingredient('Chicken', 1),
    new Ingredient('Lemon', 4),
    new Ingredient('Onion', 2)])
  ];

  recipeSelected = new Subject();

  getRecipe(){
    return this.recipes.slice();
  }
    
  getRecipebyId(index: number){
    return this.recipes[index];
  }
  constructor() { }

}
