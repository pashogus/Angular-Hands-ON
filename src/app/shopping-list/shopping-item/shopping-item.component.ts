import { Component, OnInit,Input } from '@angular/core';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  @Input() ingredientRecieved :Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

}
