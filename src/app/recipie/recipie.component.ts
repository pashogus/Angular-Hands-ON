import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';
import { RecipieService } from './recipie.service';

@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css'],
  providers : [RecipieService]
})
export class RecipieComponent implements OnInit {

  Recipieselected : Recipe;

  constructor(private recipieservice: RecipieService) { }

  ngOnInit() {
    this.recipieservice.selectedRecipie.subscribe(
      (recipie:Recipe) => {
        this.Recipieselected=recipie;
      }
    );
  
        }

}
