import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shoppingList.service';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-chicken-tikka-masala-vertical-jpg-1526066425.jpg?crop=1xw:1xh;center,top&resize=480:*',
      [
        new Ingredient('meat',1),
        new Ingredient('bread',20)
      ]),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTIxMDkxMy9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY0NTk2Njg4NX0.IRD_l12EqBNtLL_aVSvWbVJ6rx-fbtLbkpqj434TIkY/image.jpg?width=600',
      [
        new Ingredient('dhaniya',10),
        new Ingredient('aloo',2)
      ])
  ];

  constructor(private slService : ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientShoppingList(ingredients :Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
