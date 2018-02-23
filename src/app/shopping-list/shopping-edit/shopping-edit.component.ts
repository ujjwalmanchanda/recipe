import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() shoppingItemAdded = new EventEmitter<Ingredient>();
  ingredients: Ingredient[];
  constructor() { }

  ngOnInit() {
  }
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  OnAddShoppingItem(){
    this.shoppingItemAdded.emit(new Ingredient(this.ingredientName.nativeElement.value , this.amount.nativeElement.value));
  }
}
