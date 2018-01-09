import { RecipeService } from 'app/recipes/recipe.service';


import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipe:Recipe;
  id: number;

  constructor(private shoppingService: ShoppingListService,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipebyId(this.id);
      }
    )
  }
  addToShoppingList(ingredients:Ingredient[]){
    
      this.shoppingService.addIngredientsToShoppingList(ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
