import { EventEmitter, Injectable } from "@angular/core";
import { shoppingListService } from "../shared/shoppinglist.service";
import { Ingredient } from "../shopping-list/ingredient";
import { Recipe } from "./recipe.modal";

//adding Injectable( ) here as we ar injecting shopping list service in recipie detail service
@Injectable()
export class RecipieService
{

    selectedRecipie = new EventEmitter<Recipe>();


constructor(private shoppinglist : shoppingListService )
{

}

  private   recipies: Recipe [] =
    [
        new Recipe('Fat Burger',
        'Delicious Double chicken Burger consists of Bun Bread Patty Pickle Onion Mayonaisse Ketchup Cheddar Cheese and lettuce in a yellow background',
        'https://www.shutterstock.com/image-photo/gourmet-burgers-fries-beer-507278566',      
[new Ingredient('cucumber',2), new Ingredient ('patty',1)]),
    new Recipe('sandwich',
    'Two fresh submarine sandwiches with ham, cheese, bacon, tomatoes, lettuce, cucumbers and onions on dark wooden background',
    'https://www.shutterstock.com/image-photo/two-fresh-submarine-sandwiches-ham-cheese-497930494',
    [new Ingredient('tomatoes',2), new Ingredient ('lettuce',1)])
]

    getRecipie()
    {
return this.recipies.slice();
    }

    addIngredients(ingredient : Ingredient[])
    {
 this.shoppinglist.addIngredients(ingredient);
    }

    


}