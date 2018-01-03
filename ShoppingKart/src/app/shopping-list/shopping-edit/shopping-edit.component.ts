import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingName') nameInputRef:ElementRef;
  @ViewChild('ingAmount') amountInputRef:ElementRef;
  ingredient:Ingredient;
  
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(){
    debugger;
    this.ingredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.shoppingService.addIngredient(this.ingredient);
  }

}
