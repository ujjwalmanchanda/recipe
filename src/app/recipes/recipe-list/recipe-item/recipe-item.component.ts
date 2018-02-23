import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() recipeItemClicked = new EventEmitter<void>();
  @Input()  recipeItem: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onRecipeItemClick(){
    this.recipeItemClicked.emit();
  }

}
