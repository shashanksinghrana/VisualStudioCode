import { RecipeService } from './recipe.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {
 

  selectedRecipe:Recipe;
  recipeSubscription: Subscription;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeSubscription = this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe) =>{
        this.selectedRecipe = recipe;
      }
    );
  }

  ngOnDestroy(): void {
    this.recipeSubscription.unsubscribe;
  }
  
}
