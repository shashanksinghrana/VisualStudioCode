import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject();
 private ingredients: Ingredient[] = [new Ingredient('Mango', 10)];

 getIngredients(){
   return this.ingredients.slice();
 }

 addIngredient(ingredient:Ingredient){
   this.ingredients.push(ingredient);
   this.ingredientsChanged.next(this.ingredients.slice());
 }

 addIngredientsToShoppingList(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
 }

}
