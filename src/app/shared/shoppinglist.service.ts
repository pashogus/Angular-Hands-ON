import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shopping-list/ingredient";

export class shoppingListService



{

    ingredientAdded = new EventEmitter<Ingredient[]>();

   private  ingredients : Ingredient[] = [
    new Ingredient('orange',5),
    new Ingredient('Apple',10)
];

    getIngredient()
    {
        //this.ingredients will give only the refernce 
        //, to get the copy of the array we are using slice function , its an javascript fucntion
        return this.ingredients.slice();
    }

    addIngredient(ingredient : Ingredient)
    {
this.ingredients.push(ingredient);
 this.ingredientAdded.emit(this.ingredients.slice());
    }

    addIngredients(ingredient : Ingredient[])
    {
  for(let ingredients of ingredient)
  {
    this.addIngredient(ingredients)
  }
    }
 

    
}