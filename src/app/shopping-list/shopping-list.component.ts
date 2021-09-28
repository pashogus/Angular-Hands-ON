import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { shoppingListService } from '../shared/shoppinglist.service';
import { Ingredient } from './ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


/*@ViewChild - will inject the element where  #name template refernce variable is placed.
string inside @ViwChild should be same as the refernce variable name
template reference variable should not be palaced in label , it needs to be in input element
*/


/*
when we have some property/data binding in the element  ,
 to access it we need to use read token
<input #nameInput [(ngModel)]="name">
 
//ViewChild returns ElementRef i.e. input HTML Element
 
@ViewChild('nameInput',{static:false, read: ElementRef}) elRef;
 
 
//ViewChild returns NgModel associated with the nameInput
@ViewChild('nameInput',{static:false, read: NgModel}) inRef;

*/
@ViewChild('nameref') nameInputRef : ElementRef;
@ViewChild ('quantity') quantityInput: ElementRef;

shopList : Ingredient[];
  constructor(private shoppingListServie : shoppingListService ) {
  
   }

  ngOnInit(): void {
    this.shopList = this.shoppingListServie.getIngredient();
    //this.shopList.push(new Ingredient('grapes',10))
    this.shoppingListServie.ingredientAdded.subscribe(
      //ingredient : Ingredient - it should not be like this, it should be like 
     // ingredient : Ingredient[] - as we are returnign array and in subscribe call back it 
     // should be an array nto an modal object.
      (ingredient : Ingredient[]) =>
      {
                 this.shopList=ingredient;
      }
    );
  }

  addIngredient()
  {
    //const - constant
    const ingName= this.nameInputRef.nativeElement.value;
    console.log(ingName);
    const ingQuantity = this.quantityInput.nativeElement.value;
    //we need to push the ingredient value to the service , instead to the local 
    // ingredient variable.
  const Ingredientadded = new Ingredient(ingName,ingQuantity)
  this.shoppingListServie.addIngredient(Ingredientadded);
  }

}
