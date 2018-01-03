import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
 private ingredients: Ingredient[] = [new Ingredient('Mango', 10)];

 getIngredients(){
   return this.ingredients.slice();
 }

 addIngredient(ingredient:Ingredient){
   this.ingredients.push(ingredient);
   this.ingredientsChanged.emit(this.ingredients.slice());
 }

 addIngredientsToShoppingList(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
 }

}
