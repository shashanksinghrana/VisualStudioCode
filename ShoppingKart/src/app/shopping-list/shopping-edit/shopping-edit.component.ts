import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingName') nameInputRef:ElementRef;
  @ViewChild('ingAmount') amountInputRef:ElementRef;
  ingredient:Ingredient;
  @Output() ingredientAdded =  new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    this.ingredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.ingredientAdded.emit(this.ingredient);
  }

}
