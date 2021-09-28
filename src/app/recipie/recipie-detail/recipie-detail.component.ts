import { Component, OnInit,Input } from '@angular/core';
import { Ingredient } from 'src/app/shopping-list/ingredient';
import { Recipe } from '../recipe.modal';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {

  @Input() recipieDetail : Recipe;

  constructor( private recipieService : RecipieService ) { }

  ngOnInit() {
    console.log(this.recipieDetail);
  }


  /*
  we can also directly call shopping service instead of recipie service, 
  but we are doign so , to inject service in service with @injectable
  addtoShoppingList()
  {
     this.shoppinglist.addIngredients(this.recipieDetail.ingredient); 
  }
  */

 addtoShoppingList()
  {
    this.recipieService.addIngredients(this.recipieDetail.ingredient);
  }

}
