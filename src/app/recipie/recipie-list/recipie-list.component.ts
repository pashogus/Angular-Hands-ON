import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']

})
export class RecipieListComponent implements OnInit {
  recipe : Recipe [] ;

  constructor(private recipieservice: RecipieService) { 
    
  }

  ngOnInit() {
    this.recipe=this.recipieservice.getRecipie();
  }

}
