import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeEventClickedItem = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Kebab Roll","Description of the recipe", "https://upload.wikimedia.org/wikipedia/commons/e/e7/Kebab_de_la_franquicia_D%27Kebabs%2C_originaria_de_Totana.jpg"),
    new Recipe("Chicken Biryani","Description of the recipe", "https://upload.wikimedia.org/wikipedia/commons/1/18/Chicken_Biryani_in_Chennai.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeItemClicked(recipe){
    this.recipeEventClickedItem.emit(recipe);
  }
}
