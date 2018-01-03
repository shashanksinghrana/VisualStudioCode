import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe:Recipe;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
  }
  addToShoppingList(ingredients:Ingredient[]){
    debugger;
      this.shoppingService.addIngredientsToShoppingList(ingredients);
  }
}
